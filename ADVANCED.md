# 6. Advanced Features

## 6.1 Create the Ability to Add/Edit

- Update the application to allow users to add or edit data.

## 6.2 Autoscaling and Testing

https://github.com/user-attachments/assets/a8813707-cc57-4dc1-9675-380e19c3f28a

1. Go back into the App Platform and choose the App, then select **Settings**, than the App Component.
2. Scroll down to the **Resource Size** and click edit.
3. Change your **Instance Size** to the Dedicated plan of $29.00/mo. Only Dedicated plans allow for Autoscaling to be turned on.
4. Check the box to turn on autoscale; **Set containers to autoscale**.
5. Set your minimum and maximum number of containers as well as your CPU % threshold. You can leave these as defaults.

## 6.3 Test Autoscaling

1. Open your terminal
2. If you haven't installed [hey](https://github.com/rakyll/hey) yet, install that with `brew install hey`.
3. Once `hey` is installed, run this command:

```
hey [options...] <url>
```

You can check out the [hey](https://github.com/rakyll/hey) docs to see the various options. The one we run is `-n` for number of requests, followed by that number, like 20000.

The url you provide is the deployed url that DigitalOcean provides.

4. Wait until the requests end and then go back to the Cloud Console and go to the **Insights** tab in the App. You will see a graph that updates in real time showing the CPU%. Depending on how many min and max containers you set, as well as the % of CPU throttle, you will notice that the max amount of nodes spin up when the threshold is met or exceeded to handle the influx in traffic. Then after some time the nodes spin back down to the minimum you set.

![Autoscaling working](https://funko-workshop.nyc3.digitaloceanspaces.com/autoscaling/autoscaling-kicked-on.jpg)



