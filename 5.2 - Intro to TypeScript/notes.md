## TypeScript

We touched on it a little, but data can take all sorts of shapes, whether they're primitive data types, objects, or user defined types. In JavaScript, your code doens't know what type of data it will be working with or its type. So, errors are found in runtime or production.

TypeScript solves most of these types of issues. TypeScript is essentially just JavaScript, but with types, and it transpiles (similar to compiles) down to JavaScript, which is then executed. It catches the errors at compile time. In fact, your IDE will show an error if there's a type mismatch, even before compile time.

Also, when code bases become more complex, and you're working with tons of types, it makes it far easier to write and read code, especially when you're looking at code others have written.

You get autocomplete and great tooling in your IDE, which drastically cuts down on the tedious parts of development and makes it far easier to avoid bugs.

The downside? Sometimes you get types that look like this - from a project I'm working on right now.

```
export type MessageNavProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
```

We'll talk about how to either actually learn how to get the right typing here (there are tricks, you don't have to actually _know_ the right type, just how to figure it out) or how to avoid things getting this complicated to begin with. You also don't actually need to have strict types for everything - we're going to talk about tweaking the `tsconfig.json` file for your preferences.

## Getting Started
