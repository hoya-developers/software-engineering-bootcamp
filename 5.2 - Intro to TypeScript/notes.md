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

## Getting Started

To set up a TS project, at the most basic level, navigate to the root of your directory in your terminal and type

`tsc --init`

This will set up the options for the TS compiler and create a `tsconfig.json` file, which you can edit to your preferences. I've included one I usually use in this lesson, which is pretty strict. You can mouse over any of the keys, in the json file, to see what they do.

It is important to include

`"outDir": "./dist",`

This means that all of your compiled TS will generate JS files in a /dist folder. This should be added to your .gitignore file

If you want to compile the TS into JS, make sure you're in the same location as your `tsconfig.json` file and simplly type `tsc` in the terminal. This will produce new compiled JS files.

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
