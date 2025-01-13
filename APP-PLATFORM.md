# 5. Introduction to App Platform

https://github.com/user-attachments/assets/8c0de1da-c15b-4762-a0f1-b933f8adc11e

## 5.1 Getting Started with DigitalOcean App Platform

1. Learn about the [App Platform](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/) and its features.

## 5.2 Deploy Your First Application

1. Select **App Platform** from the DigitalOcean cloud console in the left sidebar.

    ![Select App Platform.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/5-AppPlatform/appplatform.png)

2. Click the **"Create App"** button.
3. Connect your GitHub account to the App Platform.
4. Once you connect your GitHub account, select the repository you want to deploy. This should be the project you've been working on.
5. The branch that is selected should be main and the source directory should be "/start". Leave **Autodeploy** checked. This will redeploy your site every time you push main to GitHub.
6. Click "Next".

## 5.3 Set Environment Variables
1. Click the "Edit" button next to your app name (you can use Global, but that would apply to all future apps you build as well.)
2. Click the "Bulk Editor" button.

    ![Click the bulk editor button.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/5-AppPlatform/bulkeditorbutton.png)

3. Copy the contents of your ".env" file you created earlier into the box.

    ![Copy your .env file into this box.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/5-AppPlatform/bulkeditor.png)
    
4. Click "Save".

## 5.4 Access Your Running Application

- Once deployed, visit the app's public URL to verify it's running correctly.

→ [Next Up: Advanced Features](ADVANCED.md)
