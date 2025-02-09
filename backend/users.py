# routers/users.py
from fastapi import APIRouter, HTTPException, status
from bson import ObjectId
import datetime

from schemas.user import UserCreate, UserResponse, UserUpdate
from database import database

router = APIRouter(prefix="/users", tags=["users"])

# Reference the MongoDB collection
user_collection = database["users"]

@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate):
    user_dict = user.dict()
    user_dict["date_created"] = datetime.datetime.utcnow()
    result = user_collection.insert_one(user_dict)
    created_user = user_collection.find_one({"_id": result.inserted_id})
    if not created_user:
        raise HTTPException(status_code=400, detail="User creation failed")
    return created_user

@router.get("/", response_model=list[UserResponse])
def get_users():
    users = list(user_collection.find())
    return users

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: str):
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user id")
    user = user_collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/{user_id}", response_model=UserResponse)
def update_user(user_id: str, user: UserUpdate):
    if not ObjectId.is_valid(user_id):
        raise HTTPException(status_code=400, detail="Invalid user id")
    update_data = {k: v for k, v in user.dict().items() if v is not None}
    result = user_collection.update_one({"_id": ObjectId(user_id)}, {"$set": update_data})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    updated_user = user_collection.find_one({"_id": ObjectId(user_id)})
    return updated_user
