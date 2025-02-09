# routers/users.py
from fastapi import APIRouter, HTTPException, status
from bson import ObjectId
import datetime

from schemas.user import UserCreate, UserResponse, UserUpdate
from database import database

router = APIRouter(prefix="/users", tags=["users"])
user_collection = database["users"]

@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate):
    user_dict = user.dict()
    user_dict["date_created"] = datetime.datetime.utcnow()
    result = user_collection.insert_one(user_dict)
    created_user = user_collection.find_one({"_id": result.inserted_id})
    # Minimal conversion: convert _id to a string
    created_user["_id"] = str(created_user["_id"])
    return created_user

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: str):
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user id")
    user = user_collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    # Minimal conversion: convert _id to a string
    user["_id"] = str(user["_id"])
    return user
