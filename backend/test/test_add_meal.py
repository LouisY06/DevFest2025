# test_add_meal.py
from datetime import date, datetime, time
from schemas.meal import MealCreate, Dish
from database import database  # adjust import as needed

# Example meal creation using your schema
meal_main_only = MealCreate(
    date=date.today(),
    dishes=[Dish(name="Red Bull Energy Drink", calories=110)],
    total_calories=110,
    image_url="https://i5.walmartimages.com/seo/Red-Bull-Energy-Drink-12-fl-oz_cc297042-66be-4db1-9ff0-e626f6c43322.d5c5ca669d0978adca72bf0c7504e6ed.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
)

# Convert the Pydantic model to a dict
meal_data = meal_main_only.model_dump()

# Convert the 'date' field from datetime.date to datetime.datetime if needed
if isinstance(meal_data["date"], date):
    meal_data["date"] = datetime.combine(meal_data["date"], time())

# Insert the document into the 'meals' collection
result = database["meals"].insert_one(meal_data)
print("Inserted meal with id:", result.inserted_id)
