# 3. Storage Creation

https://github.com/user-attachments/assets/37c57277-7bec-4359-b56f-1b07e5699954

## 3.1 Set up Spaces Bucket

1. Navigate to the **"Spaces Object Storage"** section in the DigitalOcean Cloud Console in the left sidebar.
- ![Choose Manage > Spaces Object Storage.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/managestorage.png)
2. Click on the **"Create a Spaces Bucket"** button.
- ![Click Create a Spaces Bucket](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/createaspacesbucket.png)
3. Give your bucket a unique name.
- ![Give your bucket a unique name.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/createbucket.png)
4. Click on the **"Create Spaces Bucket"** button.

## 3.2 Upload Images to DigitalOcean Spaces

1. Download the 12 images from this repository: [images](/images/images.zip).
2. Upload the images to the bucket.
- ![Upload your images](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/upload.png)
3. Make sure to set their permissions to "Public."
 - ![Set your permissions to public.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/makepublic.png)

## 3.3 Update Image URLs in the Database

1. Copy the "Origin Endpoint" for each image, and add it to the "imageUrl" property of each data object in Compass. Make sure to click "Update" to commit your change.
- ![Copy the origin endpoint from an image in your storage.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/originendpoint.png)
- ![Update the imageUrl property for each image.](https://doimages.nyc3.cdn.digitaloceanspaces.com/GitHub/funko-showcase-workshop/3-Storage/updateobjectURL.png)
2. ***Your database and image storage journey is complete!***

→ [Next Up: Intro to Website Creation](WEBSITE.md)
