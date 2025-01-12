# 4. Website Creation

## 4.1 Install Required Tools

1. Install [Node.js](https://nodejs.org/en) (npm is packaged with Node).
2. Install GitHub tools:

   **You can use the terminal if you are comfortable with it.**

  - [GitHub CLI](https://cli.github.com/) (optional)
  - [GitHub Desktop](https://desktop.github.com/download/) (optional)

## 4.2 Download the Workshop Repository
1. Fork this repository.
[Funko Showcase Workshop Repository](https://github.com/do-community/funko-showcase-workshop)
![Fork the repo](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/4-Website/forkrepo.png)
2. Clone your new repository to your local machine.
![Clone the repo](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/4-Website/clonerepo.png)

## 4.3 Add Your Connection String & Database Information
1. In the root folder of your project, create a new file named `.env`.
2. Open this file, and copy & paste this text into the file, and add your specific details.
```bash
MONGODB_URI=
DATABASE_NAME=
COLLECTION_NAME=
```
3. MONGODB_URI should be your full connection string that we created in step 2.2, including your password. Add this after the "=".
4. DATABASE_NAME should be the name of your database.  We recommended using "funko-database". Add this after the "=".
5. COLLECTION_NAME should be the name of your collection. We recommended using "funko-collection". Add this after the "=".
6. Save your file.
7. In the same directory, create another new file called `.gitignore`.
8. Open this file, and add "`.env`" on the first line of this file.
9. Save your file.
10. This will prevent us from accidentally uploading our connection string data to our GitHub repository.

## 4.3 Install Dependencies

1. In a terminal, open your new code folder.
2. Change your working directory to `/start`
```bash
cd start
```
3. Run the following command to install project dependencies:
``` bash
npm install
```

## 4.4 Build Your Website Code
1. Build the application by running the following command in the same `/start` directory.
```bash
npm run build
```
2. Run the application:
```bash
npm run start
```
- Open your browser and navigate to `http://localhost:3000` or whatever the open port is to see what the site looks like.

- Notice that the application currently has no data.

## 4.4 Improve the Website
# ***TODO: WHAT ARE WE GOING TO HAVE THE USERS DO HERE?***
1. Change directories into `/start`

2. Install the dependencies:
```bash
npm i
```

3. Open the project in your editor, run `npm start` to see the bare site. Make meaningful changes to improve it (e.g., update the UI or fix small bugs) using MaterialUI to match the final site.

## 4.5 Commit Changes to GitHub

1. Push your updated code to a GitHub repository you own:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

## 4.6 Refresh Site
- Refresh `localhost` to see your changes.

→ [Next Up: App Platform](APP-PLATFORM.md)