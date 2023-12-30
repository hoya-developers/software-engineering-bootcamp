# Introduction to JavaScript and TypeScript

JavaScript is a dynamically typed language which can be run both on a browser and on a server, and serves as the primary language for web development. TypeScript is transpiled JavaScript and is a strongly, statically typed language. Essentially, TypeScript has types (number, string, bool, etc.) and JavaScript does not.

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
