# 6. Advanced Features

In this session, you’ll set up autoscaling for your Funko Showcase app to ensure it can handle high traffic. You’ll configure autoscaling in DigitalOcean’s App Platform and test it using simulated traffic. Let’s get started!

---

## 6.1 Autoscaling Configuration

https://github.com/user-attachments/assets/a8813707-cc57-4dc1-9675-380e19c3f28a

1. Navigate back to the [App Platform](https://cloud.digitalocean.com/apps). 
2. Select your app from the `App Platform` dashboard.
3. Go to the `Settings` tab, then select **App Components**.
4. **Enable Autoscaling**:
   - Scroll to the `Resource Size` section and click **Edit**.
   - Change the **Instance Size** to a Dedicated Plan ($29.00/month). *Only Dedicated plans allow for Autoscaling to be turned on.*
   - Check the box to enable autoscaling: **Set containers to autoscale**.
   - Set your minimum and maximum number of containers as well as your CPU % threshold. You can leave these as defaults.
   - Save your changes.
---

## 6.2 Testing Autoscaling

1. **Install Testing Tools**:
   - If not already installed, use Homebrew to install `hey`, a load-testing tool:
     ```bash
     brew install hey
     ```

2. **Run Load Test**:
   - Execute a load test against your app’s public URL:
     ```bash
     hey -n 20000 -c 100 <your_digitalocean_app_public_url>
     ```
     - `-n` specifies the number of requests (e.g., 20,000).
     - `-c` specifies the number of concurrent users (e.g., 100).
     - You can check out the [hey](https://github.com/rakyll/hey) docs to see the various options. 

3. **Monitor Performance**:
   - Once the load test starts, head back to the Insights tab in the App Platform dashboard. Here, you can watch real-time metrics like CPU usage and the number of containers scaling up or down to meet demand.
   - Look for patterns: when traffic spikes, additional containers should spin up automatically to keep your app responsive. As the load decreases, the system will gracefully scale back down to your defined minimum container count, optimizing costs.
   - Take note of the CPU % graph. It’s a great way to understand how your app handles stress and adapts to changing traffic levels. The goal is to keep your app running smoothly without overprovisioning resources.
   
4. **Evaluate Results**:
   - Ensure the app maintains performance under load.
   - Verify containers scale back down once traffic subsides.

![Autoscaling Visualization](https://funko-workshop.nyc3.digitaloceanspaces.com/autoscaling/autoscaling-kicked-on.jpg)