import os
import requests
import openai
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io

app = FastAPI()

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
