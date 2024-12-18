# 7. Advanced Features

## 7.1 Create the Ability to Add/Edit

- Update the application to allow users to add or edit data.

## 7.2 Autoscaling and Testing

![Autoscaling enabled](https://funko-workshop.nyc3.digitaloceanspaces.com/autoscaling/autoscaling-setup.mp4)

1. Go back into the App Platform and choose the App, then select **Settings*, than the App Component.
2. Scroll down to the **Resource Size** and click edit.
3. Change your **Instance Size** to the Dedicated plan of $29.00/mo. Only Dedicated plans allow for Autoscaling to be turned on.
4. Check the box to turn on autoscale; **Set containers to autoscale**.
5. Set your minimum and maximum number of containers as well as your CPU % threshold. You can leave these as defaults.