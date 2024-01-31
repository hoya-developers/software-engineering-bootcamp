# Class 22: Stripe and Maps SDK

## PCI & HIPAA
When we work with people's information, there are certain legal requirements imposed on certain fields. 
##### As a rule of thumb: if you aren't 110% sure you can store information safely, don't.
You probably won't need to worry about HIPAA (healthcare data) with Devs projects, but PCI (credit card data) could reasonably be a part of your app. This causes a couple problems.
1. People have worked for years to develop PCI compliant systems and still messed up.
2. If you mess up on your implementation, Devs is liable.
How can we solve these issues? **We don't store credit card data.** This is where Stripe comes in.

## Stripe
Stripe is a payment processor that handles credit card charges for you, taking a small fee from transactions. The Stripe API lets us "collect" payment information through a **payment sheet** that passes the information directly to Stripe. No sensitive data ever hits our servers, and we don't have to worry about PCI compliance.

Stripe supports single payments, or more complicated subscription models through its API. The primary way this is handled is through a **PaymentIntent** object, which is basically a promise that the user will complete entry of their card information. When the payment is approved, the PaymentIntent updates and we can take actions based on their payment.

## Maps SDK
There are three big map SDKs:
### Google Maps SDK
- Works on all platforms
- Solid customization options
- Good pricing and can be billed with other Google services to simplify billing for the company
### iOS Maps SDK
- Only works on Apple platforms
- Not a lot of styling options
- Free with an Apple developer account (more on this next class)
### Mapbox
 - Works on all platforms
 - Absurd amount of customization
 - Good pricing

Unless you absolutely need the extensive customization features, lean towards using Google Maps SDK.
### Styling Google Maps
There are two options to style a map in your app.
#### JSON Styling
We can use [this](https://mapstyle.withgoogle.com/) deprecated tool to style our map and export it as a JSON, which we then load in and apply to our map. The problem with this approach is we have to send out an update whenever we want to update the map.
#### Cloud Styling
[Cloud styling](https://developers.google.com/maps/documentation/cloud-customization/) lets us define a map style within the cloud console and push updates from here. There are more customization options and we don't need to update the app to see the changes. It can be slightly more difficult to implement, however.

## Implementing Maps
Let's give Google Maps a shot! **Important note: this implementation is Android only for the sake of time. [Read the docs](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md) to get things working on iOS.**
1. Install the Maps Library for React Native:
```bash
npm install react-native-maps
```
2. Go to `android/app/src/main/AndroidManifest.xml` and add this code just before the closing `</application>` tag:
```xml
<meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
```
3. Jump over to the [Google Cloud console](https://console.cloud.google.com/), and create a project. Open the navigation drawer in the top left and scroll down to 'Google Maps Platform'. Click on 'APIs & Services' and enable the 'Embed API' and 'Android SDK'. Back in the side menu, click 'Keys and Credentials'. Generate a new API key, or copy the existing one. **IMPORTANT: If you're following along in class, we'll give you an API key to use. Skip this step.**
4. At the top of `home.tsx` (from last class), add a new import.
```tsx
import MapView from 'react-native-maps';
```
5. Before we export our function, let's create a stylesheet. Don't forget to import it from React Native.
```tsx
const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
  },
  map: {
    height: 400,
    width: 400,
  },
});
```
This is really important - a MapView will break if we don't define both it and its container's dimensions.
6. Let's finally implement the map. Replace our `<Text>` with this code:
```tsx
<MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.90699,
          longitude: -77.073242,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0221,
        }}
      />
```
Here, we apply the style and set our initial bounds. It's usually a good idea to center this on the user's current location. 
7. Speaking of the user's location, let's display it on the map. To do this, modify the MapView we just created:
```tsx
<MapView
        style=...
        initialRegion=...
        showsUserLocation={true}
      />
```
This doesn't seem to work, however.
8. Jump over to `android/src/main/AndroidManifest.xml`. Modify the file so the first 5 lines look like this:
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
```
9. Add `PermissionsAndroid` to our react-native import statement so it looks like this:
```tsx
import {View, StyleSheet, Button, Text, PermissionsAndroid} from 'react-native';
```
10. At the top of our `HomeScreen` function, add this code to request location access:
```tsx
PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
```
11. When you reload the app, you should get a popup to ask for your location. Accept, and click the 3 dots at the bottom of the emulator sidebar. Under location, add a point at `38.9076, -77.0719`. Make sure your location is set to it, and close the menu. You should see the blue current location dot appear in your app soon.