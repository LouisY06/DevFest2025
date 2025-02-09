import os
import sys

# Add the parent directory to sys.path so we can import main from there.
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.join(current_dir, "..")
sys.path.append(parent_dir)


from fastapi.testclient import TestClient
from main import app  # Import your FastAPI app
from datetime import date, datetime, time
from schemas.user import UserCreate
from database import database  # adjust import as needed


client = TestClient(app)

def test_create_user():
    # Define the user payload matching your UserCreate schema
    new_user = {
        "name": "Cooper",
        "current_score": 56.0,
        "score_history": [45.0, 38.0, 69.0],
        "food_history": ["Halal", "McDonalds", "Apple", "Juice", "Noodles", ""],
        "goals": ["Increase weight", "More protein"],
        "achievements": ["Halal Hall of Fame"],
        "friends": ["Dizzily", "Stltl", "XXZ", "Xinyicore"],
        "activities": ["5x Halal with Dizzily!"],
        "allergy": "Peanuts"
    }
    
    # Send a POST request to create a new user
    print("hi")
    print(new_user)
    response = client.post("/users/", json=new_user)
    print(response)

test_create_user()
  