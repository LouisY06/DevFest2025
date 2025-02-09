import os
import base64
import io
import asyncio
from datetime import datetime, timezone
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import openai
from groq import Groq
import requests

app = FastAPI()

# ✅ Retrieve API keys from environment variables
groq_api_key = os.getenv("GROQ_API_KEY")
mongo_uri = os.getenv("MONGO_URI")

# ✅ Connect to MongoDB
mongo_client = MongoClient(mongo_uri, server_api=ServerApi('1'))
try:
    mongo_client.admin.command('ping')
    print("✅ Successfully connected to MongoDB!")
except Exception as e:
    print(f"🚨 MongoDB Connection Error: {e}")

db = mongo_client["nutriscan"]  
collection = db["food_analysis"]  

# ✅ Allow Expo app to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = openai.OpenAI(
        base_url="https://api.groq.com/openai/v1",
        api_key=os.environ.get("GROQ_API_KEY")
    )

# ✅ Function to Convert Image to Base64
def encode_image_to_base64(image_bytes):
    return base64.b64encode(image_bytes).decode("utf-8")

# ✅ Function to Send Image to Groq's LLM
async def analyze_image(image_bytes):
    base64_image = encode_image_to_base64(image_bytes)

    response = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "Analyze the food image and estimate calories & ingredients."
            },
            {
                "role": "user",
                "content": [
                    {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image_bytes}"}}
                ]
            }
        ],
        model="deepseek-r1-distill-llama-70b"
    )
    return response.choices[0].message.content

# ✅ Function to Analyze Image for Calories (Alternative LLM Call)
@app.post("/analyze2")
async def analyze_calories(file: UploadFile = File(...)):
    groq = Groq()

    image = Image.open(io.BytesIO(await file.read()))
    img_resized = image.resize((1120, 1120))

    # Convert to RGB if necessary
    if img_resized.mode == "RGBA":
        img_resized = img_resized.convert("RGB")

    buffer = io.BytesIO()
    img_resized.save(buffer, format="JPEG")
    base64_image = base64.b64encode(buffer.getvalue()).decode("utf-8")

    completion = groq.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": optimal_prompt},
                    {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"}},
                ],
            }
        ],
        temperature=0,
        max_completion_tokens=800,
        top_p=1,
        stream=False,
        stop=None,
        model="llama-3.2-11b-vision-preview",
    )
    return {"response": completion.choices[0].message.content}

# ✅ FastAPI Endpoint to Accept Image Upload and Store Results
@app.post("/analyze")
async def analyze_food(file: UploadFile = File(...)):
    try:
        image = Image.open(io.BytesIO(await file.read()))
        img_byte_arr = io.BytesIO()
        image.save(img_byte_arr, format="JPEG")
        img_bytes = img_byte_arr.getvalue()

        # ✅ Call `analyze_image()`
        analysis = await analyze_image(img_bytes)

        # ✅ Store result in MongoDB
        document = {
            "timestamp": datetime.now(timezone.utc),
            "image_name": file.filename,
            "analysis": analysis,
        }
        collection.insert_one(document)

        return {"response": analysis}

    except Exception as e:
        import traceback
        print("🚨 Backend Error:", traceback.format_exc())
        return {"error": str(e)}

# ✅ Endpoint to Retrieve Past Analyses
@app.get("/history")
async def get_analysis_history():
    history = list(collection.find({}, {"_id": 0}))  
    return {"history": history}

# ✅ Get Health Feedback from LLM
@app.get("/feedback")
async def get_meal_feedback(limit: int = 5):
    try:
        # ✅ Retrieve the most recent meals
        recent_meals = list(collection.find({}, {"_id": 0}).sort("timestamp", -1).limit(limit))

        # ✅ Format meals for LLM prompt
        meal_descriptions = "\n".join([f"- {meal['analysis']}" for meal in recent_meals])

        prompt_text = f"""
        Here are recent meals analyzed by the user:
        {meal_descriptions}

        Analyze the health of these most recent meals and give feedback to the user about possible nutritional improvements for future meals.
        Provide concise, actionable suggestions for improving nutrition.
        """

        # ✅ Send meals to Groq's LLM
        feedback = await analyze_text(prompt_text)

        return {"feedback": feedback}

    except Exception as e:
        import traceback
        print("🚨 Backend Error:", traceback.format_exc())
        return {"error": str(e)}

# ✅ Helper function to send text prompts to LLM
async def analyze_text(prompt_text):
    loop = asyncio.get_running_loop()
    response = await loop.run_in_executor(
        None,
        lambda: client.chat.completions.create(
            model="deepseek-r1-distill-llama-70b",
            messages=[{"role": "user", "content": [{"type": "text", "text": prompt_text}]}],
        ),
    )

    return response.choices[0].message.content

# ✅ Optimal Prompt for Groq LLM
optimal_prompt = '''You will be analyzing a food image. The image could be a food packaging or a food dish. Please follow these rules strictly:

1. If the alternative food item is significantly different from the original, and consider vegetarian options.
2. ONLY respond with a valid **JSON** object in the format below. 
3. Do NOT add any additional text, explanation, or commentary outside of the JSON response.
4. If the food item is fried chicken, provide an explanation for the calorie count within the "explanation" field in the JSON.
5. If the item is **packaged food** (e.g., a box or bag), provide the food name and calories as listed on the packaging.
6. If the item is a **food dish** (e.g., a plate of food), provide the main ingredients and estimated calorie count based on common values for those ingredients.
7. If there is no clear alternative food item, leave the "alternative" field as `null`.

The expected response is in this specific JSON format:

{
  "main_food_items": [
    {
      "name": "food item name",          # The name of the food item.
      "alternative": "alternative food item",  # An alternative food item (optional, can be null).
      "calories": calorie count           # Calorie count of the food item (must be an integer).
    }
  ],
  "total_calories": total calorie count  # Sum of calories for the food items (integer).
}

Do NOT output any text or explanation, and ensure the JSON is **valid**  ONLY OUTPUT A JSON.'''