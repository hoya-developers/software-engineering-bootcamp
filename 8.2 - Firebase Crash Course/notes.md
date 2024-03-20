# Class 16: Firebase

---

[Class Slides](https://docs.google.com/presentation/d/16_fnXiEAUrRiFT33kwNNiuNVcq2ED9jW4hzs1sh9va0/edit?usp=sharing)

## \_aaS

\_aaS refers to a naming schema describing certain products. _aaS_ means **As A Service**, and is appended to the type of service being provided. Some examples include:

- IaaS (Infrastructure) - AWS, Google Cloud, Azure
- SaaS (Software) - Adobe Creative Cloud, Slack
- BaaS (Backend) - **Firebase**

## What is Firebase?

Firebase is a service run by Google to make app development easy by handling the most difficult parts of backend development. Some important features are:

- Database hosting (two types)
- File storage
- Authentication
- Messaging
  There are also plenty of more niche features that you may run into, but won't be covered in this lesson.

## Firebase Features

### Database (Realtime DB)

The Realtime database is the first database service firebase offered and launched with the rest of the platform. It is a NoSQL database and stores data in JSON tree format. The easiest way to visualize this is like a regular file structure you'd have on your computer. You start with at least one parent node to organize things (we would recommend treating this like a folder and putting all data of the same type under the same parent). From there, the first layer of child nodes usually contains the objects we're storing, and then all the nodes under that contain the actual data points for that object.

This type of database works perfectly fine, but is more limited in datatypes and indexing support, and is receiving far less development time than its new competition:

### Database (Firestore)

Firestore is a more recent addition to Firebase, but is an incredibly robust service. It supports more datatypes (geopoints, arrays, maps) and has faster and more detailed indexing support. The structure is fairly similar to Realtime, but it uses **documents** instead of a JSON tree. Here, you'll have a parent **collection** of similar objects at the top layer, its children will be your individual objects, but then within these children you can create more collections. This allows you to segment off your data in a more intuitive way. The other advantage is that it's far easier to navigate the Firestore database in the Firebase console than the Realtime database.

You can use both databases on projects, and we often do in our apps, but note that you should opt for Firestore for more complex data.

### File Storage

This service allows users or developers to upload images and deliver them with URLs. This is great if you want users to have profile photos or you want to deliver content without hosting it locally.

### Authentication

This service handles logging users in, resetting passwords, verifying emails, and more. The core login options are Email/Password, Phone, or Anonymous. There are a number of third party providers available though - Google, Apple, Microsoft, Yahoo, Twitter, Github, Facebook, plus a functionally open access option if you go on a payed plan. Whenever you create a user, they get a unique authentication user id. When you're making an entry for the user in your database, we recommend setting this object id as their authentication id. You can easily retrieve the id of the current signed-in user and use it to refer to the database.

### Messaging

Messaging is how we handle notifications.
**Server to User** messaging is like broadcasting. When we want to send notification when our app is closed, we use this feature. These messages can be scheduled, but also targeted based on user actions and history. There's also a dashboard to measure user engagement with the notifications, so you can see what actually works.
