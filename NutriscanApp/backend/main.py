import os
import requests
import openai
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
from groq import Groq
import base64
from PIL import Image
import io
import os
from fastapi.testclient import TestClient
from dotenv import load_dotenv



app = FastAPI()
load_dotenv()

# Retrieve the Groq API key from the environment
groq_api_key = os.getenv("GROQ_API_KEY")


# Allow Expo app to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Groq API Key
openai.api_key = os.getenv("GROQ_API_KEY")

def analyze_image(image_bytes):
    """
    Sends the food image to Groq's LLM API for analysis.
    """
    #response = openai.ChatCompletion.create(
    #    model="deepseek-r1-distill-llama-70b",
    #    messages=[
    #        {"role": "system", "content": "Analyze the food image and estimate calories & ingredients."},
    #        {"role": "user", "content": {"image": image_bytes}}
    #    ]
    #)

    client = openai.OpenAI(
        base_url="https://api.groq.com/openai/v1",
        api_key=os.environ.get("GROQ_API_KEY")
    )

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

@app.post("/analyze2")
async def analyze_calories(file: UploadFile = File(...)):
    client = Groq()

    image = Image.open(io.BytesIO(await file.read()))
    img_resized = image.resize((1120, 1120))

    # Convert to RGB if it has an alpha channel (e.g. RGBA mode)
    if img_resized.mode == "RGBA":
        img_resized = img_resized.convert("RGB")

    # Save to in-memory buffer as JPEG
    buffer = io.BytesIO()
    img_resized.save(buffer, format="JPEG")

    # Convert to base64 string
    base64_image = base64.b64encode(buffer.getvalue()).decode("utf-8")
    completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": optimal_prompt},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_image}",
                        },
                    },
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
    return {"response":completion.choices[0].message}

@app.post("/analyze")
async def analyze_food(file: UploadFile = File(...)):
    image = Image.open(io.BytesIO(await file.read()))
    
    # Convert image to bytes
    img_byte_arr = io.BytesIO()
    image.save(img_byte_arr, format="JPEG")
    img_bytes = img_byte_arr.getvalue()

    # Get LLM analysis
    analysis = analyze_image(img_bytes)

    return {"response": analysis}

###
# If testing functionality, replace URL with URL
# Llama functionality
###

# client = Groq()
# completion = client.chat.completions.create(
#     model="llama-3.2-11b-vision-preview",
#     messages=[
#         {
#             "role": "user",
#             "content": [
#                 {
#                     "type": "text",
#                     "text": "What's in this image?"
#                 },
#                 {
#                     "type": "image_url",
#                     "image_url": {
#                         "url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/LPU-v1-die.jpg"
#                     }
#                 }
#             ]
#         }
#     ],
#     temperature=1,
#     max_completion_tokens=1024,
#     top_p=1,
#     stream=False,
#     stop=None,
# )

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



# Function to encode the image
def encode_image(image_path: str) -> str:
    """Open the image, resize to 1120×1120, convert to RGB, and return base64-encoded JPEG."""
    with Image.open(image_path) as img:
        # Resize to 1120 x 1120
        img_resized = img.resize((1120, 1120))

        # Convert to RGB if it has an alpha channel (e.g. RGBA mode)
        if img_resized.mode == "RGBA":
            img_resized = img_resized.convert("RGB")

        # Save to in-memory buffer as JPEG
        buffer = io.BytesIO()
        img_resized.save(buffer, format="JPEG")
        buffer.seek(0)

        # Convert to base64 string
        img_str = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return img_str

def get_image_description(image_url: str, local: bool) -> str:
    client = Groq()
    if local:
       base64_image = encode_image(image_url)
    if local:
        completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": optimal_prompt},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{base64_image}",
                            },
                        },
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
    else:
        completion = client.chat.completions.create(
            model="llama-3.2-11b-vision-preview",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "Give the calorie amount of the food image."},
                        {"type": "image_url", "image_url": {"url": image_url}}
                    ]
                }
            ],
            temperature=0,
            max_completion_tokens=1024,
            top_p=0,
            stream=False,
            stop=None,
        )
    return completion.choices[0].message

# if __name__ == "__main__":
    # client = TestClient(app)

    # # Path to the image file you want to test
    # image_path = "/Users/davidli/Devfest2025/images/Eggplant-Parmesan-7-scaled.jpg"
    
    # # Open the file in binary mode and send it with a POST request
    # with open(image_path, "rb") as f:
    #     response = client.post("/analyze2", files={"file": f})
    
    # # Print the JSON response from the endpoint
    # print("Response status code:", response.status_code)
    # print("Response JSON:", response.json())




    ### REPLACE WITH TEST IMAGE ####


    # test_url = "/Users/davidli/DevFest2025/images/Eggplant-Parmesan-7-scaled.jpg"

    # result_message = get_image_description(test_url, local=True)

    # print(result_message.content)

    # print("Running test cases")

    # folder_path = "/Users/davidli/DevFest2025/test_images"
    # file_names = os.listdir(folder_path)
    # image_paths = [
    #     os.path.abspath(os.path.join(folder_path, f))
    #     for f in file_names
    #     if os.path.isfile(os.path.join(folder_path, f))  # only include files
    # ]
    # for path in image_paths:
    #     result_message = get_image_description(path, local=True)
    #     print(result_message.content)





