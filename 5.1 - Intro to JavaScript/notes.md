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

---

### Ternary Operator

This will come up all the time in React. It's in C++, but I've found that professors get mad at you if you use it.

```
const num1 = 1;
const num2 = 2;

const resultString = num1 < num2 ? "Num 1 is less" : "Num 2 is more";
```

Basically, if the expression before the question mark evaulates to true, the left expression is assigned the the string. Else, the right expression is assigned.

It's just a concise if-else statement but this will dramatically improve readability when you're doing React stuff.

---

### NaN

NaN stands for "not a number", and you'll see it show up if you do something funky, or maybe do an operation on something which has to be numeric, but isn't.

### Classes

```
class Example {
  constructor(name) {
    this.name = name;
  }

  normalMethod() {
    console.log("Hello, ${this.name}!");
  }

}

const obj = new Example("John");
```

### This keyword

The `this` keyword is a bit tricky in JS. It refers to the object which is executing the current function. It also behaves differently in arrow functions, which we'll cover later.

```
console.log(this); //prints the window object
```

It behaves differently in an object, and refers to the object itself.

```
const obj = {
  name: "John",
  printName: function() {
    console.log(this.name);
  }
}
```

## ES6

ES 6 added a bunch of new features to JS which pop up everywhere. [Here's a link to some of them.](https://www.w3schools.com/js/js_es6.asp)

I personally have never used maps or sets but I'm sure there are situations where they might come up. The most important additions were the spread operator, the const and let keywords, promises, and arrow functions.

## Arrow Functions

Arrow functions provide a different syntax for writing functions, and also allow you create anonymous functions, and can be very handy in callback functions.

They also have a different meaning of the `this` keyword than the old-style functions. It's counterintuitive, but in old-style functions, `this` is bound to the calling object.

However, if you use an arrow function, there's no `this` variable automatically created, and it just refers to the `this` of the outer scope.

```
const obj = {
  name: "Object",
  regularFunction: function() {
    console.log(this.name); // this refers to obj
  },
  arrowFunction: () => {
    console.log(this.name); // this refers to the outer context (could be global object or undefined)
  }
};

obj.regularFunction(); // Output: Object
obj.arrowFunction();   // Output: undefined
```

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

const doubledNumbers = numbers.map((num) => num \* 2);
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

JS objects are incredibly easy to work with. They are always enclosed with `{}`. Here's an example of what they look like. These are simple key-value pairs for each field. A key is mapped to either value which can be a primitive type, an array, or an object. These can be nested arbitrarily deeply.

```

let person = {
firstName: "John",
lastName: "Doe",
age: 30,
address: {
city: "Example City",
country: "Example Country",
}, //address is an object also
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

You'll often see this notation in JSON files. You'll have a bunch of JSON files like `package.json`, `settings.json`, `tsconfig.json`, etc. Often these files have important build settings

---

### Object Destructuring

Values from objects can be extracted from the object and used as variables. Here's a simple example. This is incredibly useful.

```

const person = {
firstName: "John",
lastName: "Doe",
age: 30,
address: {
city: "Example City",
country: "Example Country",
},
};

const { firstName, lastName, age, address: { city, country } } = person;

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("City:", city);
console.log("Country:", country);

```

### Spread Operator

The spread operator in JS looks like `...`

This can be used on both arrays and objects in order to create a new object or array, but add some new values. Remember, arrays are immutable, so you usually just create a new one. Here's an example.

```

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
// newNumbers is [1,2,3,4,5]

```

It essentially _spreads_ the array into the new array, but also adds the new things you put in it. This also works for objects.

```

const person = {
firstName: "John",
lastName: "Doe",
};
const newPerson = {...person, age: 40}
newPerson is {
firstName: "John",
lastName: "Doe",
age: 40
}

```

## Asynchronous functions, async/await, Promises, .then()

Waiting for an action to occur, then proceeding with the code, is incredibly common when you're doing things like fetching data from a database, which takes time. There are a few different ways that this can be handled in JS.

### async/await

Here's an example of the async/await syntax. Functions are declared as `async` functions, and anything inside them which takes time to resolve is preceded by the `await` keyword. You will often wrap these in try/catch blocks.

As fetching data from a database takes some time, that function must be awaited.

```

const fetchDataAsync = async () => {
try {
const data = await fetchDataFromDatabase(); //this is asynchronous, takes time
console.log("Data fetched:", data);
} catch (error) {
console.error("Error fetching data:", error);
}
}

```

---

## Promises

Promises are a bit tricker. A Promise is an object which is the representation of an asynchronous operation and represents its current state. Typically, they're used to avoid chaining a bunch of callback functions within each other.

Promises can be pending (not yet completed), fullfilled (worked fine), or rejected (something went wrong).

Here's a basic example of a promise.

```

const myPromise = new Promise((resolve, reject) => {
// Asynchronous operation (e.g., fetching data, reading a file)
setTimeout(() => {
const success = true;

    if (success) {
      resolve("Operation successful!"); // Fulfill the promise with a value
    } else {
      reject("Operation failed!"); // Reject the promise with a reason
    }

}, 1000);
});

```

Once we have the promise, here's how you can work with it.

The `.then()` is executed if the promise is fulfilled, and `.catch()` executes when the promise is rejected.

```

myPromise
.then((result) => {
console.log("Fulfilled:", result);
})
.catch((error) => {
console.error("Rejected:", error);
});

```

async functions can return promises. Here's an example which ties together most of the stuff in this lesson.

```

const getNotifications = async ({ req }) => {
const data = await Notification.find({
where: { creatorId: req.session.userId },
order: { id: "DESC" },
});
return data;
}

```

This function returns a promise, either containing an array of notifications, or it is undefined. TypeScript will help with this later.

It takes an argument of an object, destructed into simply `req`. In this case, this is a request - we'll deal with this later when we cover express.

It declares a constant, called data, which is the return value of an awaited function which queries a database.

The `.find()` function takes an object, which has a key `where` with the value being an object, with the `creatorID` key being `req.session.userId`. It then orders the array of notifications in descending order.

It then returns data, which came in an async function, so it is returned as a promise.

This is production code which queries a database, using a userId, and gets their notifications for them.

```

```
