import os
import requests
import openai
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import base64
import asyncio
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime, timezone

app = FastAPI()

# Allow Expo app to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

uri = os.getenv("MONGO_URI")

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# ✅ Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("✅ Successfully connected to MongoDB!")
except Exception as e:
    print(f"🚨 MongoDB Connection Error: {e}")

db = client["nutriscan"]  # Database name
collection = db["food_analysis"]  # Collection name



# Groq API Key
openai.api_key = os.getenv("GROQ_API_KEY")


# Initialize Groq Client
client = openai.OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=os.getenv("GROQ_API_KEY")
)

# Function to Convert Image to Base64
def encode_image_to_base64(image_bytes):
    return base64.b64encode(image_bytes).decode("utf-8")

# Function to Send Image to Groq's LLM

async def analyze_image(image_bytes):
    base64_image = encode_image_to_base64(image_bytes)

    loop = asyncio.get_running_loop()
    response = await loop.run_in_executor(
        None,  # Uses the default ThreadPoolExecutor
        lambda: client.chat.completions.create(
            model="llama-3.2-90b-vision-preview",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"}},
                        {"type": "text", "text": "Analyze the food image and estimate calories & ingredients."},
                    ],
                }
            ],
        ),
    )

    return response.choices[0].message.content

    return response.choices[0].message.content

# ✅ FastAPI Endpoint to Accept Image Upload and Store Results
@app.post("/analyze")
async def analyze_food(file: UploadFile = File(...)):
    try:
        image = Image.open(io.BytesIO(await file.read()))

        # ✅ Convert image to bytes for LLM processing
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
        print("🚨 Backend Error:", traceback.format_exc())  # Debugging Output
        return {"error": str(e)}

# ✅ Endpoint to Retrieve Past Analyses
@app.get("/history")
async def get_analysis_history():
    history = list(collection.find({}, {"_id": 0}))  # Exclude MongoDB `_id` field
    return {"history": history}


@app.get("/feedback")
async def get_meal_feedback(limit: int = 5):
    try:
        # ✅ Retrieve the most recent meals (sorted by timestamp)
        recent_meals = list(collection.find({}, {"_id": 0}).sort("timestamp", -1).limit(limit))

        # ✅ Format meals for LLM prompt
        meal_descriptions = "\n".join(
            [f"- {meal['analysis']}" for meal in recent_meals]
        )

        # ✅ Construct LLM Prompt
        prompt_text = f"""
        Here are recent meals analyzed by the user:
        {meal_descriptions}

        Analyze the health of these most recent meals and give feedback to the user about possible nutritional improvements for future meals.
        Provide concise, actionable suggestions for improving nutrition.
        Do not include any other text than the direct feedback to the user.
        """

        # ✅ Send meals to Groq's LLM
        feedback = await analyze_text(prompt_text)

        return {"feedback": feedback}

    except Exception as e:
        import traceback
        print("🚨 Backend Error:", traceback.format_exc())  # Debugging Output
        return {"error": str(e)}

async def analyze_text(prompt_text):
    loop = asyncio.get_running_loop()
    response = await loop.run_in_executor(
        None,
        lambda: client.chat.completions.create(
            model="deepseek-r1-distill-llama-70b",
            messages=[
                {
                    "role": "user",
                    "content": [{"type": "text", "text": prompt_text}],
                }
            ],
        ),
    )

    return response.choices[0].message.content
