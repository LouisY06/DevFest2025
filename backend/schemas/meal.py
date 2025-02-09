from pydantic import BaseModel, Field 
from typing import List, Optional
from datetime import date

# Schema for a single dish
class Dish(BaseModel):
    name: Optional[str] = "None"
    calories: Optional[int] = 0

    class Config:
        arbitrary_types_allowed = True  # Allow types that pydantic doesn't automatically generate schemas for
        extra = "allow"                 # Allow extra fields

# Base schema for meal data (including user info)
class MealBase(BaseModel):
    comment: str
    date: str
    # It’s best to use an actual date object for a default if the field is a date.
    dishes: List[Dish] = Field(default_factory=list)
    image_url: Optional[str] = None
    total_calories: Optional[int] = None

    user_icon_link: Optional[str] = None

    # Additional user-related fields
    user_id: Optional[str] = None
    username: Optional[str] = None

    class Config:
        arbitrary_types_allowed = True
        extra = "allow"

# Schema used for meal creation (input)
class MealCreate(MealBase):
    class Config:
        arbitrary_types_allowed = True
        extra = "allow"

# Schema for a meal as stored/retrieved from the database
class Meal(MealBase):
    id: Optional[str] = None

    class Config:
        arbitrary_types_allowed = True
        extra = "allow"
        from_attributes = True  # Ensures ORM compatibility
