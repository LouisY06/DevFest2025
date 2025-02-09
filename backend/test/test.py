from database import mongo_client, database  # Imports from your database.py file in the root directory

def test_connection_and_collections():
    try:
        # List all databases available on the server
        dbs = mongo_client.list_database_names()
        print("Databases available on the server:")
        for db in dbs:
            print(" -", db)
        
        # Check if the "nutriscan" database exists and list its collections
        if "nutriscan" in dbs:
            print("\nCollections in 'nutriscan' database:")
            collections = database.list_collection_names()
            for collection in collections:
                print(" -", collection)
        else:
            print("\nDatabase 'nutriscan' does not exist on the server.")
    except Exception as e:
        print("Error connecting to MongoDB:", e)

if __name__ == "__main__":
    test_connection_and_collections()
