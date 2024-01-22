# Class 21: Stylesheets and Firebase Integration

## Stylesheets
Stylesheets are a Native component that allows us to style based on class and id. The format is almost identical to CSS stylesheets. The difference between ReactJS and React Native is that we don't have a separate CSS file.

## Firebase
Check the notes for 8.2 for an overview of Firebase and the features provided.
#### Connecting Firebase (Android)
1. Install the react native firebase library
```bash
npm install @react-native-firebase/app
```
2. Follow [this video](https://www.youtube.com/watch?v=6juww5Lmvgo) until 1:17. Make sure the name you enter matches the name found in `android/app/build.gradle`.
3. Download the generated json file and place it in `android/app/google_services.json`.
4. Add the google services plugin in `android/build.gradle` as below.
```java
buildscript 
  dependencies {
    // other dependencies
    classpath("com.google.gms:google-services:4.4.0")
  }
}
```
5. And also add it in `android/app/build.gradle`:
```java
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services'
```
If you aren't developing for iOS, skip to step 4.

#### Connecting Firebase (iOS)
1. Install the react native firebase library
```bash
npm install @react-native-firebase/app
```
2. Follow [this video](https://www.youtube.com/watch?v=6juww5Lmvgo) until 1:17. Make sure the "iOS bundle ID" matches the local bundle id (under the general tab in Xcode).
3. Download the generated plist file and open `/ios/{project}.xcodeproj` in Xcode.
4. Right click the project in the left bar and click "Add files".
5. Select your file with the "Copy if needed" checkbox checked and press "Add"
6. Edit `/ios/{project}.mm`, adding `#import <Firebase.h>` immediately after `#import "AppDelegate.h"`
7. In the `didFinishLaunchingWithOptions` method, add `[FIRApp configure];` at the top.
8. Right after `prepare_react_native_project!`, add:
```rb
use_frameworks! :linkage => :static
$RNFirebaseAsStaticFramework = true
```

#### Autolinking
We won't explain what autolinking is, but click [here](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md#autolinking) if you want to learn more about it.

For Android, run the following command in the project root:
```bash
npm start
```
For iOS, run the following command in the project route:
```bash
cd ios/
pod install --repo-update
cd ..
npx react-native run-ios
```

## Putting it all together
Create a new React Native project and add this code to `App.tsx`:
```tsx
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './screens/login';
import HomeScreen from './screens/home';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
```
Also, go ahead and run these commands in the terminal:
```bash
npm install react-native-screens
npm install react-native-safe-area-context
```

Now we can get started!
1. Create a new folder called "helpers" at the project root. Per our best practices, we should keep non-UI logic in a "helpers" folder.
2. In this folder, make a file called `authHelper.tsx`
3. To the top of this file, add this code:
```tsx
import auth from '@react-native-firebase/auth';
```
4. This won't work yet - open the terminal and run this command in the project root:
```bash
npm install @react-native-firebase/auth
```
5. Let's create a couple basic functions:
```tsx
export const login = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
}; 
```
```tsx
export const logout = () => {
  return auth().signOut();
};
```
```tsx
export const register = (email: string, password: string) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
};
```
6. Make a "screens" folder. We'll put our UI in this folder.
7. Create a file called `login.tsx`.
8. Let's start by importing our dependencies, and then defining the values we want from this form.
```tsx
import React from 'react'
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {login} from '../helpers/authHelper';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return(
    <View> 
      //....
    </View>
  );
};
```
9. Now that we have this info down, lets create a skeleton of the form.
```tsx
return(
  <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        defaultValue={email}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        defaultValue={password}></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={text => setConfirmPassword(text)}
        defaultValue={confirmPassword}></TextInput>
      <Button title="Login" onPress={authLogin} />
      <Button title="Register" onPress={authRegister} />
      <Text>{error}</Text>
    </View>
)
```
10. You might notice that we haven't defined a lot of these values. After the definition of `LoginScreen` (outside the last curly bracket), add this code to define our stylesheet.
```tsx
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginText: {
    fontSize: 30,
    color: 'black',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
```
11. Between all the const declarations and the return in the LoginScreen definition, add the following code to launch the login when we press the button.
```tsx
const authLogin = () => {
    setLoading(true);
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    } else {
      login(email, password)
        .then(() => {
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          setError(error.message);
        });
    }
  };
```
12. Right after it, let's add logic to handle making an account.
```tsx
const authRegister = () => {
    setLoading(true);
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    } else {
      register(email, password)
        .then(() => {
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          setError(error.message);
        });
    }
  };
```
13. Now that our login/registration page is ready, let's implement the logic to go beyond the page when we're signed in. Jump over to your app's [firebase console](https://console.firebase.google.com/), open the 'Build' dropdown on the left, and click 'Authentication'. Click the 'Email and Password' option,  toggle the first option, and hit 'Save'.
14. Go ahead and make an account in your app. After pressing 'Register', switch back to the firebase page. You should see your new account! Because firebase caches user logons in the app, you're already signed in there, so no need to login.
15. Make a new file in `screens` called `home.tsx` and add this code to it:
```tsx
import React from 'react';
import {View,Text} from 'react-native';

const HomeScreen = () => {
    return <View>
        <Text>Home</Text>
    </View>;
}

export default HomeScreen;
```
16. Switch back to `App.tsx` and add a new import.
```tsx
import HomeScreen from './screens/home.tsx'
```
17. Within the App function, add this code between our variable and our first return statement:
```tsx
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
```
18. Now when you reload, you should see a blank page that just says "Home". Congrats! Authentication is working for your app!
19. To verify this, let's jump back to `home.tsx` and change the imports at the top of the file:
```tsx
import {View, Text, Button} from 'react-native';
import { logout } from '../helpers/authHelper';
```
20. After the text that displays now, let's add a "Logout" button.
```tsx
<Text>Home</Text>
<Button title="Logout" onPress={() => logout()} />
```
21. Try clicking the logout button and logging in again. Everything should go smoothly!
