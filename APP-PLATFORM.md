# 5. Introduction to App Platform

https://github.com/user-attachments/assets/8c0de1da-c15b-4762-a0f1-b933f8adc11e

## 5.1 Getting Started with DigitalOcean App Platform

1. Learn about the [App Platform](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/) and its features.

## 5.2 Deploy Your First Application

1. Select **App Platform** from the DigitalOcean cloud console in the left sidebar.
2. Click the **"Create App"** button.
3. Connect your GitHub repository to the App Platform.
4. Once you connect your GitHub repo(s), select the repository you want to deploy. This should be the project you've been working on.
5. The branch that is selected should be main and the source directory can stay the default. Leave **Autodeploy** checked. This will redeploy your site every time you push main to GitHub.
6. Add a resource, you will choose **Database** and click **Add**.

## 5.3 Configure your Database

1. Select **Attach existing DigitalOcean database**.
2. Choose your cluster and click **Next**.

## 5.3 Set Environment Variables

- Add your MongoDB connection string and other environment variables:
```
Key: MONGODB_URI
```
```
Value: your_connection_string_here
```

## 5.4 Access Your Running Application

- Once deployed, visit the app's public URL to verify it's running correctly.

→ [Next Up: Advanced Features](ADVANCED.md)
