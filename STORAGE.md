# 3. Storage Creation

https://github.com/user-attachments/assets/37c57277-7bec-4359-b56f-1b07e5699954

## 3.1 Set up Spaces Bucket

1. Navigate to the **"Spaces Object Storage"** section in the DigitalOcean Cloud Console in the left sidebar.
2. Click on the **"Create a Spaces Bucket"** button.
3. Choose a datacenter region for your bucket. NY is the default.
4. Give your bucket a unique name.
5. Select a project to add your bucket to.
6. Click on the **"Create Spaces Bucket"** button.

## 3.2 Upload Images to DigitalOcean Spaces

1. Find the images folder in the root of your working directory. (You can also find them here [images](/images)).
2. Upload the images to the bucket.
- ![Upload your images](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/upload.png)
3. Make sure to set their permissions to "Public."
 - ![Set your permissions to public.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/makepublic.png)

## 3.3 Update Image URLs in the Database

1. Copy the "Origin Endpoint" for each image, and add it to the "imageUrl" property of each data object in Compass. Make sure to click "Update" to commit your change.
- ![Copy the origin endpoint from an image in your storage.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/originendpoint.png)
- ![Update the imageUrl property for each image.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/updateobjectURL.png)

→ [Next Up: Intro to Website Creation](WEBSITE.md)
