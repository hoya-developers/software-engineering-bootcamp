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

Pros: Strict typing, autocomplete, IDE support, optional chaining, and the main one - bugs get caught before compile time, not at runtime or in production.

Cons: Sometimes it can be hard to figure out to right type for a very complicated type or interface. We'll go over some tricks. Here's an example of a particularly nasty one that came up in a current project of mine.

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

This means that all of your compiled TS will generate JS files in a /dist folder,
