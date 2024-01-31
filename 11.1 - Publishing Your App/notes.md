# Class 22: Publishing your App

## App Store
**Bundling for iOS release requires XCode, and cannot be done on a Windows device.**
### Developer Account
To publish on the App Store, you need an Apple Developer account. This account costs $140 - get the group you're developing for to pay this cost and get the login information for the account.

### Signing/bundling
1. Open the project in XCode.
2. In the top bar, select `Product`, then `Scheme`, then `Edit Scheme`. Select `Run` from the options on the left, then change the `Build Configuration` dropdown to `Release`.
3. Press `Cmd + B` to build the app.
4. Open a terminal, navigate to the `/ios` folder of your app, and run this command:
```shell
open .
```
5. Double click the `.xcworkspace` file.
6. From the top menu, click `Product`, then `Archive`, then set the `Device` to "Any iOS Device".
7. When this completes, click `Distribute App`.
8. Click `App Store Connect`, then `Upload`, check all boxes, and then `Next`.
9. Choose either automatic or manual signing, then choose `Upload`.
The app should now show up in [TestFlight](https://developer.apple.com/testflight/) for you to send out for beta tests.
## Play Store

### Developer Account
To publish on the Play Store, you need a [Google Developer account](https://play.google.com/console/u/0/signup). This costs $25.

### Signing Key
We need to create a key that proves we're the real author of the app. The way we do this varies based on our platform.
#### Windows
1. Open an administrative command prompt.
2. Run the below commands, swapping `{my-key-alias}` for something more fitting.
```shell
cd "C:\Program Files\Java\jre-1.8\bin"
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias {my-key-alias} -keyalg RSA -keysize 2048 -validity 10000
```
3. Fill out the questions it prompts with afterwards.

#### MacOS
1. Open a terminal.
2. Run the below commands, swapping `{my-key-alias}` for something more fitting.
```bash
cd "$(/usr/libexec/java_home)"
sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
3. Fill out the questions it prompts with afterwards.

#### Using the Key
1. Move the new keystore file into your project's `android/app` folder.
2. To the end of `android/gradle.properties`, add this code, replacing the values with the ones for your keystore.
```java
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```
3. Edit `android/app/build.gradle`, adding this new `signingConfig` after the `debug` one:
```java
signingConfigs {  
	debug {
		//...
	}
	release {  
		if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {  
		storeFile file(MYAPP_UPLOAD_STORE_FILE)  
		storePassword MYAPP_UPLOAD_STORE_PASSWORD  
		keyAlias MYAPP_UPLOAD_KEY_ALIAS  
		keyPassword MYAPP_UPLOAD_KEY_PASSWORD  
		}
	}
}
```
4. A little further down in the same file, we'll edit the `release` value in `buildTypes`. Replace `signingConfig signingConfigs.debug` with `signingConfig signingConfigs.release` like this:
```java
buildTypes { 
	//...
	release {
		signingConfig signingConfigs.release
		//... 
	}  
}
```
5. Run this command to bundle the app for release:
```bash
npx react-native build-android --mode=release
```
6. You're ready to upload! The bundle can be found at`android/app/build/outputs/bundle/release/app-release.aab`. 