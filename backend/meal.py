from fastapi import APIRouter, HTTPException, UploadFile, File, Query
from schemas.meal import Meal, MealCreate
from database import meal_collection  # Assume this provides a Motor/MongoDB collection
from bson import ObjectId
from typing import List
from datetime import datetime, time, date

router = APIRouter()

# CREATE A NEW MEAL
@router.post("/", response_model=dict)
async def create_meal(user_id: str, meal: MealCreate, file: UploadFile = File(None)):
    """
    Create a new meal for a user.
    Optionally, an image file can be uploaded to be processed externally,
    and the resulting URL included in the meal record.
    
    The endpoint returns a JSON in the format:
    {
      "main_food_items": [
        {
          "name": "food item name",
          "alternative": "alternative food item",  # or null if not provided
          "calories": calorie count
        }
      ],
      "total_calories": total calorie count
    }
    """
    # Convert the Pydantic model (MealCreate) to a dictionary.
    meal_data = meal.model_dump()
    meal_data["user_id"] = user_id

    # Convert the 'date' field from datetime.date to datetime.datetime if necessary.
    if isinstance(meal_data.get("date"), date):
        meal_data["date"] = datetime.combine(meal_data["date"], time())

    # Optionally process the file here if needed...
    # For now, we assume the image_url is provided as part of the payload.

    # Insert the document into the "meals" collection.
    new_meal = await meal_collection.insert_one(meal_data)
    created_meal = await meal_collection.find_one({"_id": ObjectId(new_meal.inserted_id)})
    if not created_meal:
        raise HTTPException(status_code=400, detail="Meal creation failed")

    # Transform the stored meal data into the expected response format.
    # Here we assume that each dish has at least a "name" and "calories" field.
    main_food_items = []
    for dish in created_meal.get("dishes", []):
        main_food_items.append({
            "name": dish.get("name"),
            # Use the provided "alternative" if present; otherwise, default to null.
            "alternative": dish.get("alternative", None),
            "calories": dish.get("calories")
        })

    response_data = {
        "main_food_items": main_food_items,
        "total_calories": created_meal.get("total_calories")
    }
    return response_data

@router.get("/", response_model=List[Meal])
async def get_meals(user_id: str, meal_date: date | None = Query(None)):
    """
    Retrieve all meals for a given user.
    Optionally filter by a specific date.
    """
    query = {"user_id": user_id}
    if meal_date:
        # Depending on how dates are stored, you might need additional formatting
        query["date"] = meal_date.isoformat()
    meals = await meal_collection.find(query).to_list(100)
    return meals

@router.get("/{meal_id}", response_model=Meal)
async def get_meal(user_id: str, meal_id: str):
    """
    Retrieve a single meal by meal_id for the given user.
    """
    meal = await meal_collection.find_one({"_id": ObjectId(meal_id), "user_id": user_id})
    if meal is None:
        raise HTTPException(status_code=404, detail="Meal not found")
    return meal

@router.put("/{meal_id}", response_model=Meal)
async def update_meal(user_id: str, meal_id: str, meal: MealCreate):
    """
    Update an existing meal record.
    """
    update_result = await meal_collection.update_one(
        {"_id": ObjectId(meal_id), "user_id": user_id},
        {"$set": meal.dict()}
    )
    if update_result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Meal not found or not updated")
    updated_meal = await meal_collection.find_one({"_id": ObjectId(meal_id), "user_id": user_id})
    return updated_meal

@router.delete("/{meal_id}")
async def delete_meal(user_id: str, meal_id: str):
    """
    Delete a meal record.
    """
    delete_result = await meal_collection.delete_one({"_id": ObjectId(meal_id), "user_id": user_id})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Meal not found")
    return {"detail": "Meal deleted successfully"}
