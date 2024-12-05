# 2. Website Creation

## 2.1 Install Required Tools

1. Install Material UI for styling components.
2. Install Node.js for running JavaScript-based tools.
3. Install GitHub tools:
  - GitHub CLI
  - GitHub Desktop (optional).

## 2.2 Clone the Workshop Repository

1. Clone the website code from this public repository:
[Funko Showcase Workshop Repository](https://github.com/do-community/funko-showcase-workshop)

## 2.3 Improve the Website

1. Open the project in your editor and make meaningful changes to improve it (e.g., update the UI or fix small bugs).

## 2.4 Install Dependencies

1. Run the following command to install project dependencies:
``` bash
npm install
```

2. Test the project locally:
```bash
npm start
```

- Notice that the application currently has no data.

## 2.5 Connect the Database

1. Create a `.env.local` file in the project directory.

2. Add the MongoDB connection string provided during the workshop:

```
MONGODB_URI=your_connection_string_here
```

3. Restart the application and verify it connects to the database.

## 2.6 Commit Changes to GitHub

1. Push your updated code to a GitHub repository you own:
```bash
git add .
git commit -m "Initial setup with database connection"
git push origin main
```

→ [Next Up: Database Creation](DATABASE.md)