# Introduction to React

React is an open source JS library created by Facebook, and is the #1 technology used in web development today.

Instead of writing complicated HTML documents, and integrating them with JS, React allows you to write HTML inside of JS/TS.

Instead of updating the DOM on the page with every state change, React creates a virtual DOM, which is modified, then that virtual DOM is rendered on the page. This is highly performant.

You create custom, reusable components and nest them inside other parent components, and pass data from parent to child.

## Project Organization

[Here's a link which lays out some sample React project structures.](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)

Here's the basic structure of a React App.

```
my-react-app/
|-- src/
|   |-- assets/
|   |   |-- images/
|   |   |-- styles/
|   |-- components/
|   |   |-- Button/
|   |   |   |-- Button.tsx
|   |   |   |-- Button.css
|   |-- pages/
|   |   |-- Home/
|   |   |   |-- Home.tsx
|   |   |   |-- Home.css
|   |-- services/
|   |   |-- api.ts
|   |-- utils/
|   |   |-- helpers.ts
|   |-- App.tsx
|   |-- index.tsx
|-- public/
|   |-- index.html
|-- package.json
|-- tsconfig.json
|-- ...
```

.tsx or .jsx files are used when you have HTML components in a file.

`assets`: Contains static assets - often broken down into `images` and `styles` folders.

`components`: Contains all React components. Sometimes organized logically into sub folders

`pages`: Contains full pages which are different routes in the application.

`services`: API calls, external services, etc.

`utils`: Helper functions.

`public`: Contains the entry point, `index.html`, into the application. Also contains public assets such as favicon, manifest.json, and an icon.

I've included a png of a recent project structure of mine. There are a few floating files which could probably be organized elsewhere.

## Getting Started

### Create React App

You can manually add dependencies to your existing project, but it's often much easier to create a project from scratch.

Navigate to the directory where you'd like to create a project and entered the following command.

`npx create-react-app my-app --template typescript`

[Here's where you can get started.](https://create-react-app.dev/docs/adding-typescript/).

### Create Next App

Next.js is used heavily in tandem with React. It's main draws are that it uses server-side rendering and a dynamic, easy way to route traffic (any file names in the /pages directory automatically become routes). Likewise, you can create API routes by placing TS files in the /pages/api directory for serverless api calls.

It typically improves performance in various ways, and allows deployment via Vercel. I would recommend always using this over the create-react-app.

To run, type the following command in the root of your terminal.

`npx create-next-app@latest`

[Info here on how to set up.](https://nextjs.org/docs/pages/api-reference/create-next-app)

### External Libraries

There are lots of external component libraries which you may want to use in the future - we'll touch on some of them later in the course, but when you're creating a fresh application. It's much easier to create a project using their command line create project command, rather than add dependencies later.

## React Basics

[Here's a link to a repository where I'll be hosting most of the React we write.](https://github.com/colingraydon/bootcamp-react-example)
