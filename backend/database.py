import os
from pymongo import MongoClient
import os
from pymongo import MongoClient
from pymongo.server_api import ServerApi


# Get the MongoDB connection string from an environment variable, or use a default value
mongo_uri = os.getenv("MONGO_URI")
print(mongo_uri)

# Connect to MongoDB
mongo_client = MongoClient(mongo_uri, server_api=ServerApi('1'))

# Create a PyMongo client

# Connect to your database
database = mongo_client.nutriscan

# Get a collection (for example, the "meals" collection)
meal_collection = database.get_collection("meals")
user_collection = database.get_collection("users")
food_analysis = database.get_collection("food_analysis")
