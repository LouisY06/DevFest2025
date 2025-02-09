from pydantic import BaseModel, Field
from typing import List
from datetime import date

# Schema for a single dish
class Dish(BaseModel):
    name: str
    calories: int

# Base schema for meal data
class MealBase(BaseModel):
    date: date
    dishes: List[Dish]
    total_calories: int
    image_url: str

# Schema used for meal creation (input)
class MealCreate(MealBase):
    pass

# Schema for meal stored/retrieved from the database
class Meal(MealBase):
    id: str = Field(..., example="605c72ef3f1b2c3a8e4d5f67")  # Use a string for the ID
    user_id: str

    class Config:
        from_attributes = True
