import os
import requests
import openai
from fastapi import FastAPI, File, UploadFile
from pymongo import MongoClient
from PIL import Image
import io

app = FastAPI()

# MongoDB Connection
client = MongoClient("mongodb+srv://your_mongodb_connection_string")
db = client["foodDB"]
collection = db["foodAnalysis"]

# OpenAI Vision API Key
openai.api_key = os.getenv("OPENAI_API_KEY")

def analyze_image(image_bytes):
    """
    Calls OpenAI's Vision API to analyze the image.
    """
    response = openai.ChatCompletion.create(
        model="gpt-4-vision-preview",
        messages=[
            {"role": "system", "content": "Analyze the food image and estimate calories."},
            {"role": "user", "content": {"image": image_bytes}}
        ]
    )
    return response["choices"][0]["message"]["content"]

@app.post("/analyze")
async def analyze_food(file: UploadFile = File(...)):
    image = Image.open(io.BytesIO(await file.read()))
    
    # Convert image to bytes for OpenAI API
    img_byte_arr = io.BytesIO()
    image.save(img_byte_arr, format="JPEG")
    img_bytes = img_byte_arr.getvalue()

    analysis = analyze_image(img_bytes)

    # Store result in MongoDB
    data = {"image_name": file.filename, "analysis": analysis}
    collection.insert_one(data)

    return {"response": analysis}
