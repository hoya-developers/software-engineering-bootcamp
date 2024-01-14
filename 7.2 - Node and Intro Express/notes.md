# Node and Express

## Node

Node.JS is a JS runtime environment which allows you to execute JS/TS outside of a broswer. It has an HTTP server which can make requests.

It's event-driven, so events (requests) trigger callback functions. It is often paired with Express.

Here's a digram of how it is architected.

![](./Nodejs-Architecture.png)

There are some common, built in modules which will often come in handy.

### File System

fs is used to read files.

```
import 'fs';

// Reading a file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### HTTP

```
import 'http';

// Creating an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

// Listening on a port
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

```

### Path

Used to work with file paths.

```
const path = require('path');

// Joining path segments
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log(fullPath);

// Resolving a relative path
const absolutePath = path.resolve('folder', 'file.txt');
console.log(absolutePath);
```

[If you'd like the full list, you can check out the docs here.](https://nodejs.org/api/all.html)

## Express

Express is almost always paired with a Node server. When requests are made to the Node HTTP server, it passes them to the express server, which runs middleware then fulfills the request and provides a response to the Node server, which passes the response back to the client.

You can add express to your project with

`npm install express`

`npm install -D @types/express`

![](./ExpressDiagram.jpg)

### What it does it do?

Express is a framework built on JS which is used to create quick, easy web applications at scale. It typically is composed of routes, controllers, and views.

A route associates an HTTP verb (GET, POST, UPDATE, DELETE) with a URL path and a function. It refers to how an application's endpoints respond to client requests.

A controller function handles the logic involved with specific routes.

A view is typically composed of HTML, and uses templating engines like EJS.

### Routes

To explain routes, we need to explain HTTP verbs first. The main ones are

POST - creates something

PUT - updates something

GET - reads something

DELETE - deletes something.

I've included some commented out routes in the `testIndex.ts` file. The express app must be created in your `index.ts` file, as that is the entry point for the application.

GET request

```
const app = express();
app.use(express.json()); //middleware

// GET request
// curl -X GET http://localhost:3000
app.get("/", (_, res: Response) => {
  // Handle GET request logic here
  res.send("GET request received");
});
```

POST request

```
// POST request
// curl -X POST http://localhost:3000
app.post("/", (_, res: Response) => {
  res.send("POST request received");
});
```

Another POST, on a different route

```
// POST request
// curl -X POST http://localhost:3000/test
app.post("/test", (_, res: Response) => {
  res.status(200).json({
    firstName: "foo",
    lastName: "bar",
  });
});
```

PUT and DELETE using dynamic route

```
// PUT request
// curl -X PUT http://localhost:3000/123
app.put("/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  res.send(`PUT request received for user with ID ${userId}`);
});

// DELETE request
// curl -X PUT http://localhost:3000/456
app.delete("/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  res.send(`DELETE request received for user with ID ${userId}`);
});
```

### curl and Postman

Aside from the browser, the 2 main ways to check if your API is working are by using curl and Postman.

Postman is very cool because it allows you to mock up JWT, cookies, data payloads, etc. All with a GUI. For testing any authentication logic I've written (not just using Firebase), I go with Postman every time.

[Get Postman here.](https://www.postman.com/downloads/)

curl is a bash command which stands for client URL, and allows you to test data transfers to and from servers.

[Here's a curl overview.](https://www.hostinger.com/tutorials/curl-command-with-examples-linux/)

### Controllers

We're going to go into more detail when we talk about databases and how to modify them. For now, we're going to use some mocked up data to show examples, using res.json(). In the real world. you will be making requests to a database.
