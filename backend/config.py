import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    MONGO_DETAILS: str = os.getenv("MONGO_DETAILS", "mongodb://localhost:27017")
    API_BASE_URL: str = os.getenv("API_BASE_URL", "http://localhost:8080")

settings = Settings()
