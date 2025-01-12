# 2. Database Creation

https://github.com/user-attachments/assets/ec6ae7d7-525f-44ac-8beb-1b0656739173

## 2.1 Configure and Run a Database

1. Log into your [DigitalOcean account](https://cloud.digitalocean.com/login).
2. Open "Manage > Databases" in the left menu.
- ![Open Manage > Databases.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/2-Database/manage_databases.png)
3. Click the blue "Create Database" button.
- ![Create database.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/2-Database/create_database.png)
4. The default choices should be correct for this lab. Click "Create Database Cluster" at the bottom of the page.
- ![Default choices screenshot.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/2-Database/database_config.png)
5. Provisioning your database will take about 5 minutes. Might be time to refill your water, or grab a quick snack.

## 2.2 Setup Compass

REMINDER: You won't be able to complete this step until your database is provisioned.
1. Download and install [MongoDB Compass](https://www.mongodb.com/products/compass) if not already installed.
2. Copy your connection string from the DigitalOcean console. (It will copy the password automatically.)
- ![Copy your connection string.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/2-Database/connectionstring.png)
3. In Compass, click on "Connections" and select "New Connection" in the left panel.
![Set up New Connection in Compass](https://funko-workshop.nyc3.digitaloceanspaces.com/database/step-0.jpg)
4. Paste the connection string into the "URI" field.
5. Give the connection a name and choose a color if you prefer, then click "Save & Connect".

## 2.3 Setup Database in Compass

1. Click on the "Create Database" button next to the name of the connection. It looks like this, ➕ (a plus symbol).
2. For the "Database Name", use "funko-database".
3. For the "Collection Name", use the name "funko-collection". 
![Enter database name](https://funko-workshop.nyc3.digitaloceanspaces.com/database/step-1.jpg)

## 2.4 Ingest Data

1. Download this starter JSON data file to your machine. [(download)](https://github.com/do-community/funko-showcase-workshop/blob/main/data.json) 
2. Click the "Import Data" button to add the JSON file.
- ![Import data into database](https://funko-workshop.nyc3.digitaloceanspaces.com/database/step-2.jpg)
3. Click "Import" to upload your data to your collection.
![Click the import button to add data to the database](https://funko-workshop.nyc3.digitaloceanspaces.com/database/step-4.jpg)
4. ***Congratulations!  You've created your database!***

As you looked at the data we imported, you should have noticed an empty "imageUrl" field for each one.  We will need to create some storage to hold these images, and then we will need to update our data to point to those images.
- ![Imported Data](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/2-Database/importeddata.png)


→ [Next Up: Storage Creation](STORAGE.md)
