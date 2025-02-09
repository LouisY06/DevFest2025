# user.py

from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from bson import ObjectId  # Only used for JSON encoding in the config

class UserBase(BaseModel):
    name: str
    current_score: float = 0.0
    score_history: List[float] = []
    food_history: List[str] = []   # You can later refine this type if needed
    goals: List[str] = []
    achievements: List[str] = []
    friends: List[str] = []        # Storing friend IDs as strings
    activities: List[str] = []
    allergy: Optional[str] = None

class UserCreate(UserBase):
    """Schema for creating a new user."""
    pass

class UserUpdate(BaseModel):
    """Schema for updating an existing user. All fields are optional."""
    name: Optional[str] = None
    current_score: Optional[float] = None
    score_history: Optional[List[float]] = None
    food_history: Optional[List[str]] = None
    goals: Optional[List[str]] = None
    achievements: Optional[List[str]] = None
    friends: Optional[List[str]] = None
    activities: Optional[List[str]] = None
    allergy: Optional[str] = None

class UserResponse(UserBase):
    """Schema for user responses, including id and date_created."""
    id: str = Field(..., alias="_id")  # Map MongoDB's _id to a string field named "id"
    date_created: datetime

    class Config:
        allow_population_by_field_name = True
        # Automatically convert MongoDB's ObjectId to a string when encoding to JSON
        json_encoders = {ObjectId: str}
