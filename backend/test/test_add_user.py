import os
import sys

# Add the parent directory to sys.path so we can import main from there.
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.join(current_dir, "..")
sys.path.append(parent_dir)


from fastapi.testclient import TestClient
from main import app  # Import your FastAPI app


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
    response = client.post("/users/", json=new_user)
    
    # Assert that the response status code is 201 (Created)
    assert response.status_code == 201, f"Unexpected status code: {response.status_code}"
    
    # Parse the JSON response
    data = response.json()
    
    # Debug print (optional)
    print("Created User:", data)
    
    # Assert that the returned data includes an 'id' field and the expected name
    assert "id" in data, "Response JSON does not include an 'id' field"
    assert data["name"] == "Alice", f"Expected name 'Alice', got {data['name']}"
    
    # Optionally, verify other fields if needed
    assert data["current_score"] == 100.0
    assert data["score_history"] == [50.0, 75.0, 100.0]
    assert data["food_history"] == ["salad", "soup"]
    assert data["goals"] == ["increase strength", "run 5k"]
    assert data["achievements"] == ["completed a marathon"]
    assert data["friends"] == []
    assert data["activities"] == ["yoga"]
    assert data["allergy"] == "none"
