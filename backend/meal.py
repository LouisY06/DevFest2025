from fastapi import APIRouter, HTTPException, UploadFile, File, Query, Body
from schemas.meal import Meal, MealCreate
from database import meal_collection  # Assume this is a Motor/MongoDB collection
from bson import ObjectId
from typing import List
from datetime import datetime, time, date

meal_router = APIRouter(prefix="/meals", tags=["meals"])

# CREATE A NEW MEAL
@meal_router.post("/", response_model=dict)
async def create_meal(meal: dict):
    return meal
    """
    Create a new meal.
    Optionally, an image file can be uploaded. The resulting URL is part of `meal.image_url`.
    
    Returns JSON in format:
    {
      "main_food_items": [
        {"name": "...", "alternative": "...", "calories": ...}
      ],
      "total_calories": ...,
      "username": "...",
      "user_icon_link": "...",
      "id": "..."  (the new meal's DB ID)
    }
    """

    # Convert Pydantic to dict

    # Convert date -> datetime if needed

    # Optionally process file if needed... or rely on meal.image_url

    # Insert into Mongo


# GET ALL MEALS FOR A USER
@meal_router.get("/", response_model=List[Meal])
async def get_meals(
    user_id: str,
    meal_date: date | None = Query(None),
):
    """
    Retrieve all meals for a given user_id.
    Optionally filter by date.
    """
    query = {"user_id": user_id}

    if meal_date:
        # If you stored 'date' as a datetime in the DB, you'll need to do a range query
        # Or if you stored it as a string, compare as string
        # For a simple approach, do:
        date_str = meal_date.isoformat()
        query["date"] = date_str

    meals = await meal_collection.find(query).to_list(1000)
    # We rely on the response_model=List[Meal] to parse it back

    return meals


# GET A SINGLE MEAL BY ID
@meal_router.get("/{meal_id}", response_model=Meal)
async def get_meal(meal_id: str, user_id: str):
    """
    Retrieve a single meal by meal_id + user_id
    """
    meal_doc = await meal_collection.find_one({"_id": ObjectId(meal_id), "user_id": user_id})
    if meal_doc is None:
        raise HTTPException(status_code=404, detail="Meal not found")
    return meal_doc


# UPDATE A MEAL
@meal_router.put("/{meal_id}", response_model=Meal)
async def update_meal(meal_id: str, user_id: str, meal_update: MealCreate):
    """
    Update an existing meal. We pass meal_update which also contains user_id, username, etc.
    """
    update_data = meal_update.model_dump()

    # Convert date -> datetime if needed
    if isinstance(update_data.get("date"), date):
        update_data["date"] = datetime.combine(update_data["date"], time())

    update_result = await meal_collection.update_one(
        {"_id": ObjectId(meal_id), "user_id": user_id},
        {"$set": update_data}
    )
    if update_result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Meal not found or not updated")

    updated_doc = await meal_collection.find_one({"_id": ObjectId(meal_id), "user_id": user_id})
    if not updated_doc:
        raise HTTPException(status_code=404, detail="Meal not found after update")

    return updated_doc


# DELETE A MEAL
@meal_router.delete("/{meal_id}")
async def delete_meal(meal_id: str, user_id: str):
    """
    Delete a meal by meal_id + user_id
    """
    delete_result = await meal_collection.delete_one({"_id": ObjectId(meal_id), "user_id": user_id})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Meal not found")
    return {"detail": "Meal deleted successfully"}
