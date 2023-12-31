# Introduction to JavaScript and TypeScript

JavaScript is a dynamically typed language which can be run both on a browser and on a server, and serves as the primary language for web development. TypeScript is written and transpiled into JavaScript and is a strongly, statically typed language. Essentially, TypeScript has types (number, string, bool, etc.) and JavaScript does not.

We will be introducing JavaScript at first, but all development will be done in TypeScript.

## Extensions

To get started, we're going to install some handy VS Code extensions. If you're using a different text editor or IDE, there may be equivalents.

### Code Runner

Code runner will allow you to run simple JavaScript, which we will be doing today.

### Prettier

This is a JS/TS essential. It will format your code to a standardized style every time you save your file. This makes for a far more readable format, especially in complicated HTML blocks.

You will have to go to your settings.json and add the following lines. You can do this by pressing <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on Mac, or <kbd>Control</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on Windows, and searching for `Preferences: Open User Settings (JSON)`

```
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
```

### NPM Intellisense

This wil be important later, and it will help you import the correct modules or libraries that you use in your code

### Path Intellisense

This will help you import the correct files in the directory. Again, this is something that will be important later. Occasionally it will mess up and give an absolute path instead of a relative path, but it's easy to fix and saves a lot of time.

## JavaScript Examples

Use console statements to print to console, in the web browser, or alternatively print to terminal if running on a server.

Comments in JS/TS are written with `//`, like in Java and C++.

```
//Prints "Hello World!"
console.log("Hello World");
```

---

Here is a basic function which adds two numbers together.

```
function add(a, b) {
  return a + b;
}

add(1, 2); //this is OK
add("Hello", " World!"); //this is OK
add(1, "Hello"); //this will cause an error
```

Notice that the function has no return type, and the arguments have no type either. This function would be able to be used to add two numbers, or two strings to concantenate them. However, adding a string to a number would cause a runtime error. These are both the pros and cons of JavaScript. In TypeScript, you can add types for these arguments and can and should add a return type as well.

---

A simple funtion that checks if a number is even. Again, there is no return type, and any object or primitive data type can be passed in.

```
function isEven(num) {
  //Note the use of === instead of ==
  return num % 2 === 0;
}
```

In JavaScript and TypeScript, there is a difference between `===` and `==`.

In JS/TS, `===` works like how `==` works in C++. It checks if the two values are the same. However, `==` performs something called type coercion, where it will convert one type to another, then check for equality.

In JavaScript, the following expression is true.

`'5' == 5`

In general, use of `==` should be avoided. It can lead to incredibly weird bugs and a ton of time spent debugging them.

Likewise, `!==` is a check for strict inequality, and is the opposite of `===`, and `!=` is a check for type coercion inequality, and is the opposite of `==`.

---

Here's a function which will find and return the max number in an array. Arrays in JS are immutable and work very similarly to C-style languages. Remember, JS is dynamically typed language, so

```
function findMax(arr) {
  var max = arr[0];

  //Note .length instead of .size()
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

```

---

Variables in JS can be declared with `let` or `var` keywords. The difference revolves around the scope of each. Let's look at an example of each.

```
function scoping() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo"
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}
```

Variables declared with `let` are only available within the scope they are declared within. Trying to reference them outside of their brackets wil result in an error. However, `var` variables will be available outside the scope.

Constants are declared with `const` and you'll use these frequently.

---

### String Interpolation

String interpolation is just a way to put variables into strings without spending a ton of time on concatenating them. Here's an example.

```
function interpolate(username) {
    console.log("Hello, ${username}!");
}
```

## ES6

ES 6 added a bunch of new features to JS which pop up everywhere. [Here's a link to some of them.](https://www.w3schools.com/js/js_es6.asp)

I personally have never used maps or sets but I'm sure there are situations where they might come up. The most important additions were the spread operator, the const and let keywords, promises, and arrow functions.

## Arrow Functions

Arrow functions provide a different syntax for writing functions, and also allow you create anonymous functions, and can be very handy in callback functions.

They also have a different meaning of the `this` keyword than the old-style functions. It's counterintuitive, but in old-style functions, `this` is bound to the calling object.

However, if you use an arrow function, there's no `this` variable automatically created, and it just refers to the `this` of the outer scope.

[Here's some material if you want to read more about it.](https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/)

Here's an example of a basic arrow function.

```
const firstArrowFunction = (a, b) => {
    return a + b;
}
```

They are declared with the `const` keyword. `firstArrowFunction` is the name of the function, and `a, b` are the parameters. The arrow points to the body of the function, then there are the enclosing brackets.

The above function could also be wrtten like this

```
const secondArrowFunction = (a, b) => a + b;
```

These functions are identical. Current best practices dictate that you should be using arrow functions.

### Callback functions

A callback function waits for some event to happen, then is executed. Here's an example of one that waits for a button to be pressed.

```
<button onClick={() => console.log("hello world!")}>hi guys</button>
```

The syntax takes a while to get used to. This is an anonymous function, which takes no parameters, which is executed when the button is clicked. Typically, callback functions are used in asynchronous functions or for event handling, which is the case here.

Here's an example of an arrow function, `delayedMessage`, which utilizes an anonymous callback function.

```
//after a waiting the amount of time specified by delay , this will print message to console
const delayedMessage = (message, delay) => {
  setTimeout(() => {
    console.log(message);
  }, delay);
}
```

This function will wait for the amount of time specified by the `delay` argument and then print the `message` argument to the console. `setTimeout` is a JS built in function which takes both a callback function, then the delay as its argument.

## Array Functions

### Map

JS has a bunch of built in array functions which are incredibly useful and you'll use all the time. Any time I have to do some operation to an array, I always check if JS has already given me a method to do it easily. Here are 3 that you'll likely use frequently.

Here's the `map()` method, which takes an array and returns another array, after using the anonymous function argument which is provided. Here, every element of the `numbers` array is referred to as `num`, and `doubledNumbers` has each corresponding element just be double the element of `numbers`

```
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
//doubledNumbers is [2, 4, 6, 8 10];
```

---

### forEach

The `forEach()` method iterates through an array and does something, which you define, for every element. Here, it is taking each name in the array, creating a variable using a string literal, then printing that variable to console

```
const names = ["Alice", "Bob", "Charlie"];

names.forEach((name) => {
  const stringLiteral = `Hello, ${name}!`;
  console.log(stringLiteral);
});
```

---

### filter

The `filter()` method will filter an array and return a new array, only keeping elements which meet the criteria. Here, we only keep any ages 21 or over.

```
const adults = [18, 25, 30, 20, 40];
const drinkers = ages.filter((age) => age >= 21);
// drinkers is [25, 30, 40]
```

## JSON and JavaScript objects

JS objects are incredibly easy to work with. Here's an example of what they look like. These are simple key-value pairs for each field.

```
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    city: "Example City",
    country: "Example Country",
  },
  hobbies: ["reading", "coding", "traveling"],
};
```

Fields are are simply accessed and modified like this.

```
console.log(person.address.city);
person.address.city = "New City";
person.hobbies[0] = "cooking";
```

Here's an example

You'll often see this notation in JSON files. You'll have a bunch of JSOn files like `package.json`, `settings.json`, `tsconfig.json`, etc. Often these files have important build settings
