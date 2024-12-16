# 3. Database Creation

## 3.1 Configure and Run a Database

1. Log into your DigitalOcean account.
2. Use the Managed Databases feature to create a new database.
- Follow the prompts to set up a MongoDB database.
3. Alternatively, use the DigitalOcean web console to configure your database.

## 3.2 Connect the Database

1. Create a `.env` file in the root of the `/start` directory.

2. Add the MongoDB connection string provided from the Cloud Console:

```
MONGODB_URI=your_connection_string_here
```

## 3.3 Ingest Data

1. Download the provided JSON file with sample data.
2. Use [MongoDB Compass](https://www.mongodb.com/products/compass) to ingest the JSON file into your database.

3. Restart the application and verify it connects to the database.

→ [Next Up: Storage Creation](STORAGE.md)