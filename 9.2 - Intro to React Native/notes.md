# Class 18: Intro to React Native
---
[Class Slides](https://docs.google.com/presentation/d/17tA-LTxR3jgA5LY5VCOQTngFtDczuqfKCEluINNuEqc/edit?usp=sharing)

## ReactJS vs React Native

ReactJS and React Native are largely the same language. Both are written in JavaScript, but are designed for different target platforms. The React we've been learning is designed for web-based apps. Native, on the other hand, is built to be installed on iOS and Android devices (support also exists for Windows and macOS).

React Native is great because it can compile and run on Android and iOS, meaning we don't have to write separate code for both platforms. Importantly, though, we can't write it exactly like we can write React. Our format is going to look the same, but we don't actually have any HTML files (or even CSS). Instead, everything is written in JS files. The main file is App.tsx (a typescript file). Since we aren't using HTML, we can't use the normal tags. Instead, we use...

## Native Components
#### Ones you know
There are a couple of components that have direct, simple counterparts in React.
- **View** is a UI container, same as a **div**
- **Text** is text
- **Image** displays images, same as **img**
- **TextInput** allows text entry, same as **input**
- **Button** is a button, same as **button**
- **StyleSheet** works like a CSS stylesheet, we'll talk about this next class

#### Fun and new
- **Switch** is a toggle switch (exists in html, but not as a single tag)
- **ActivityIndicator** is a loading bar
- **StatusBar** lets us modify the display of the status bar (the row with time, battery, service/wifi)
- **Dimensions** gets screen dimensions
- **Animated** lets us animate 

### Lists
There are three components to show lists in React Native
- **ScrollView** loads and renders all the items on load. The state of the items is maintained, but it is very inefficient and only usable with a small number of items.
- **FlatList** is more efficient and can do thousands of items, but it doesn't maintain the state of the item when you scroll past it.
- **SectionList** is a FlatList but with sectioned data.

### Platform Specific
Some components only work on certain platforms.
#### iOS
- **ActionSheetIOS** displays an action sheet (the sheet that pops up when you share something)
#### Android
- **DrawerLayoutAndroid** handles a navigation drawer
- **PermissionsAndroid** handles permissions
- **BackHandler** handles what happens when the user presses the "back" button
- **ToastAndroid** makes toast alerts (a little box at the bottom with text)

### Important Community Libraries
 - Sliders allow the user to drag to select their input. Check out [Awesome Slider](https://github.com/alantoa/react-native-awesome-slider?tab=readme-ov-file) or [Slider](https://github.com/Sharcoux/slider)
 - [Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler) is a faster implementation of gesture recognition and required for some libraries
 - [formik](https://github.com/jaredpalmer/formik) makes forms way easier to implement (used by Stripe, Lyft, Airbnb, Walmart, PwC)
	 - [Yup](https://www.npmjs.com/package/yup) for easy form validation
 - **[React Navigation](https://reactnavigation.org/)** is super important and will make your life far easier. Even supports params!


# Props
Since we already know what props are, we aren't going to get to in depth. We define props as a type (think a dictionary) of key and data type. 
```ts
type ExampleProps = {
	age: int;
	city: string;
};
```
Then, when we're defining our component, we pass it the props object.
```ts
const ExampleComponent = (props: ExampleProps) => {
	return(
		<Text>User is {props.age} years old and lives in {props.city}</Text>
	);
};
```
To use this component, all we have to do is:
```ts
<ExampleComponent age="18" city="DC">
```
Important to note - no matter what data type we set in the props definition, we must pass the data in quotes.

Some important, built in props for Native:
 - **source** defines the source link for an Image component
 - **style** works on pretty much every component, same things as style in HTML
 - **shadows** are a category of props that let us deal with dropshadows
	 - shadowColor
	 - shadowOffset
	 - shadowOpacity
	 - shadowRadius
Pretty much all props that are available in HTML can work as a prop, but check the [docs](https://reactnative.dev/docs/image-style-props) if you're having issues.