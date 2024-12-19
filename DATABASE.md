# 3. Database Creation

https://github.com/user-attachments/assets/ec6ae7d7-525f-44ac-8beb-1b0656739173

## 3.1 Configure and Run a Database

1. Log into your [DigitalOcean account](https://cloud.digitalocean.com/login).
2. Use the Managed Databases feature to create a new database.
- Follow the prompts to set up a MongoDB database.

## 3.2 Connect the Database

1. Create a `.env` file in the root of the `/start` directory.

2. Add the MongoDB connection string provided from the Cloud Console:

```
MONGODB_URI=your_connection_string_here
```
## 3.3 Setup Compass

1. Download and install [MongoDB Compass](https://www.mongodb.com/products/compass) if not already installed.
2. Click on "Connections" and select "New Connection" in the left panel.
![Set up New Connection in Compass](https://funko-workshop.nyc3.digitaloceanspaces.com/database/step-0.jpg)
3. Paste the connection string from the Cloud Console into the "Connection String" field.
4. Give the connection a name and choose a color if you prefer, then click "Save & Connect".

## 3.4 Setup Database in Compass

1. Click on the "Create Database" button next to the name of the connection. It looks like this, ➕ (a plus symbol).
2. Enter the name of the database you created in the Cloud Console to keep things organized.
![Enter database name](https://funko-workshop.nyc3.digitaloceanspaces.com/database/step-1.jpg)
3. Give your database collection a name, i.e. 'funkos'.

## 3.3 Ingest Data

1. Click on the "Import Data" button.
![Import data into database](https://funko-workshop.nyc3.digitaloceanspaces.com/database/step-2.jpg)
2. Select the `data.json` from the root of the workshop directory.
![Select the data file](https://funko-workshop.nyc3.digitaloceanspaces.com/database/step-3.jpg)
3. Click the "Import" button to add the data to the database.
![Click the import button to add data to the database](https://funko-workshop.nyc3.digitaloceanspaces.com/database/step-4.jpg)
4. Restart the application and verify it connects to the database.
5. Notice that the images are broken, this will be fixed when you move on to the next section!

→ [Next Up: Storage Creation](STORAGE.md)
