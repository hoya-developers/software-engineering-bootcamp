# Node, npm, and TypeScript

## Getting Started

First, we need to install Node and npm, node package manager. This allows you to add external libraries, packages, modules, etc., including TypeScript. We'll be using nvm, node version manager, to install both node and npm.

If you already have Node or NPM on your machine, you're probably good. You can chekc by typing
`node -v`
and
`npm -v`
in your terminal.

[Go here to follow the instructions for your OS.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

[Mac/Linux users follow this](https://github.com/nvm-sh/nvm)

[Windows users follow this](https://github.com/coreybutler/nvm-windows)

[Video for Windows users](https://www.youtube.com/watch?v=gDJcEt7pPv8)

[Video for Mac users](https://www.youtube.com/watch?v=BhLFxy6Jz8c)

### Installing TS

Once you have npm set up, you can install TS globally with the following command.

`npm install -g typescript`

You should also install ts-node globally

`npm install -g ts-node`

# TypeScript

Pros: Strict typing, autocomplete, IDE support, optional chaining, and the main one - bugs get caught before compile time, not at runtime or in production. Also makes it far easier to write complex code with lots of pieces.

Cons: Sometimes it can be hard to figure out to right type for a very complicated type or interface. We'll go over some tricks. Here's an example of a particularly nasty looking one that came up in a current project of mine.

```
export type MessageNavProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
```

When things get syntax heavy like this, I like to look at a cheat sheet.

https://www.typescriptlang.org/cheatsheets

## Getting Started

To set up a TS project, at the most basic level, navigate to the root of your directory in your terminal and type

`tsc --init`

This will set up the options for the TS compiler and create a `tsconfig.json` file, which you can edit to your preferences. I've included one I usually use in this lesson, which is pretty strict. You can mouse over any of the keys, in the json file, to see what they do.

It is important to include

`"outDir": "./dist",`

This means that all of your compiled TS will generate JS files in a /dist folder. This should be added to your .gitignore file

If you want to compile the TS into JS, make sure you're in the same location as your `tsconfig.json` file and simplly type `tsc` in the terminal. This will produce new compiled JS files.

---

### Tips and Tricks

If you open an additional terminal, you can type

`tsc --watch`

which will recompile your files every time you save, and also alert you if there are any errors in your project. I usually leave this running I code.

## package.json Scripts

In your `package.json` file, you can add custom scripts which are very useful while you're developing your app. Here's a good boilerplate to have

```
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
    "test": "jest",
    "start": "node dist/index.js",
    "start2": "ts-node src/index.ts",
    "dev": "nodemon dist/index.js"
  }
```

To run, say, the `dev` script you would simply type

`npm run dev`

I usually have both a `watch` and `dev` scripts running in different terminals.

`test` is used for automated testing and is beyond the scope of this course, but you can use a library called Jest to implement automated testing for your JS/TS project, which can be incredibly useful in CI/CD pipelines and save you huge amounts of dev time in the long run

`start` uses a node server and the `index.js` file as the entry point

`start2` uses ts-node and the `index.ts` file as an entry point

`dev` uses a package called `nodemon` which allows you, if you're observing a local webpage on, say, localhost:3000, to edit your code in VS Code and the webpage will automatically update itself. Huge timesaver.

## Types

TypeScript allows you to declare types and interfaces for data. Here's some basic examples.

`const myName: string = "Alice";`

`const myAge: number = 48;`

The only numeric type in TS is `number`. No ints, longs, shorts, size_t's, etc.

Here's how to write a simple adder function

```
const add = (a: number, b: number) : number => a + b;
```

You've seen generic types in C styled languages. Here's what generics look like in TS - this function will add numbers, strings...anything that has a defined + operation.

```
const add = <T>(a: T, b: T): T => {
  return a + b;
};
```

---

### Defining Types

You'll constantly be defining your own types for different data which you need to pass around. Let's look at what a user type might look like.

```
type User = {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
  hobbies: string[];
};
```

Declaring a User might look like this

```
const newUser: User = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  isActive: true,
  hobbies: ["reading", "coding", "traveling"],
};
```

---

### Interfaces

Interfaces are extremely similar to types in TS. They have a few minor differences that I'm going to gloss over (for example, interfaces can extend other interfaces), but ultimately it comes down to personal preference. I like types, I would say the majority of people like types, so that's what we're going to be teaching and using in this course.

If you see something that looks like this

```
interface GeorgetownStudent {
  major: string;
  name: string;
  age: number;
}
```

You'll at least know what you're looking at. Notice how interfaces are expressed differently.

---

### Type union, typeof

Oftentimes, a variable can be one type or another, and it's OK for it to be either. Here's a basic example.

```
type Data = number | string[] //Can also be Array<string>

processData = (input: Data): void => {
    if (typeof input === "number") {
        console.log("Thish is a number");
    } else {
        console.log("This is not a number");
    }
}
```

The `typeof` keyword can be used to determine the type of an object or primitive data type. This is referred to as type narrowing.

---

### Type intersection

Opposite of union is type intersection, and it's exactly what it sounds like.

```
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  position: string;
};

type EmployeePersonIntersection = Person & Employee;

// Creating an object that satisfies the intersection type
const employeePerson: EmployeePersonIntersection = {
  name: "John",
  age: 30,
  employeeId: "E123",
  position: "Software Developer",
};

It simply merges the two types and combines all of their attributes.
```

### Built-in Types and JS Objects

boolean, string, number, undefined, null, any, unknown, never, void, bigint, symbol are all of the built-in types in TS.

### undefined and null

`undefined` represents a variable which has been declared, but not initialized, where `null` is the intentional absence of a value.

```
let x; //x is undefined
let y: null = null; //y is null
```

Here's a small production example, using some more notifications.

```
const getNotification = (id: number): Promise<Notification[] | null>  => {
    return Notification.find({ where: { id } });
}
```

parameter: a number

return type: A Promise, of a type union between an array of notifications, or null.

This is some stripped down production code which queries a database for a notification, by its specific id. You don't have to understand the exact syntax of the body, as it's using an external library, but essentially it queries a Notification database for all notifications associated with a specific user id, which is passed in.

As this is an asynchronous database lookeup, it must return a promise, or use an await statement. If the id is valid, it will return an array of notifications. If the id is not valid, it will return null - undefined would not be appropriate.

TypeScript will complain if you do not include null here. TS will also yell at you if you don't include a null/undefined where it wants one, or if you use the wrong one, so it's easy to fix.

### Any

`any` includes all possible objects, types, and primitives. Everything is `any`.

As a rule, you should avoid using this wherever possible, because it defeats the point of TS. My `tsconfig.json` is set to yell at me any time I use it, because it is not type safe.

However, there are some extremely rare scenarios where it can be appropriate. If you are dealing with a module which does not have defined @types/foo which you can import, you can either spend your own time making the types (costly) or just use `unknown`. Any legacy JS code may require an `unknown` in the interest of saving time. There are niche, edge cases where `any` may be needed instead of unknown.

You can also use it to avoid extremely nasty types.

`type NestedObject<T> = {
  [K in keyof T]: T[K] extends object ? NestedObject<T[K]> : T[K];
};`

This is just ugly and no one wants to deal with it. If you really need to, you can just say `as unknown` every time this comes up, but again, there are insane edge cases where `as any` works but `unknown` won't.

Google's style guide forbids you from ever using `any` while writing TS.

---

### as const

Adding `as const` after an expression means that it will be immutable. Here's an example.

```
const person = {
  name: "John",
  age: 30,
  roles: ["developer", "designer"] as const,
} as const;

// person is inferred as a readonly object with specific literal types
// person: {
//   readonly name: "John";
//   readonly age: 30;
//   readonly roles: readonly ["developer", "designer"];
// }
```

The reason you might do this, aside from making something read only, is to fix a TS error. Sometimes, if your `tsconfig.json` is strict enough, it will complain if you returning a mutable object when it is expecting something immutable. React complains about this sometimes. Here's an example I found from some of my code.

```
export function useLocalStorage<T>(key: string, fallbackValue: T) => {
  const [value, setValue] = useState(fallbackValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const; //note I forgot to specify a return type - bad practice
}
```

This is React stuff, so you don't have to understand it yet, but I was attempting to return the array associated with setState, which should not be mutable, and TS was complaining until I returned it as const. Sometimes it fixes errors.

---

### Classes

TS also has classes. I've seen these primarily used in two ways - class-based React (which we will not be covering in depth) and for defining schemas, which we'll touch on when we cover databases.

These are pretty similar to C++ classes, so I'm going to assume you're mostly covered here. Note the constructor and function header syntax.

```
class Person {

  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}
```

---

### Exporting Types

Don't export if you don't need to. If you have types that will come up in multiple files, create a `types.ts` file in the `src` folder in your directory, and export them all from there.

---

### NPM and types

For every library you add, you'll also have to add the corresponding types as a dev dependency, if they have been created.

If you have added `express` as a dependency, you'll have to add

`npm install -D @types/express`

The format is simply `@types/foo`, and it should always be installed as a dev dependency.

---

### keyof

The keyword `keyof` simply means a union of all the keys (string literals) of a given type. It pops up a lot, here's an example

```
type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarKey = keyof Car;
type EquivalentCarKey = "brand" | "model" | "year";
```

---

### Errors

TypeScript errors tend to be extremely ugly looking. There's a VS Code extension called Pretty TypeScript Erros, which I've heard is OK, but I don't think it fixes everything.

There aren't a huge amount of tricks to learning how to deal wtih them other than these 2.

First, read the last line of the error. The above ones are usually not super meaningful - the last line typically has the exact type that the compiler is looking for.

Also, command clicking on a type brings you to exactly where that type was defined, even if it was not defined by you. You can look at the object, type, interface, etc.
