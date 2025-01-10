# 4. Website Creation

## 4.1 Install Required Tools

1. Install [Node.js](https://nodejs.org/en) (npm is packaged with Node).
2. Install GitHub tools:

   **You can use the terminal if you are comfortable with it.**

  - [GitHub CLI](https://cli.github.com/) (optional)
  - [GitHub Desktop](https://desktop.github.com/download/) (optional)

## 4.2 Download the Workshop Repository

![Fork the repo](https://funko-workshop.nyc3.digitaloceanspaces.com/website/web-0.jpg)

1. Fork & clone the website code from this public repository:
[Funko Showcase Workshop Repository](https://github.com/do-community/funko-showcase-workshop)

## 4.3 Install Dependencies

1. Change directories into `/final`

2. Run the following command to install project dependencies:
``` bash
npm i
```

3. Run the application:
```bash
npm run start
```
- Open your browser and navigate to `localhost:3000` or whatever the open port is to see what the site looks like.

- Notice that the application currently has no data.

## 4.4 Improve the Website

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