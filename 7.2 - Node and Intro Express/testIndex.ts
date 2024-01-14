// import express, { Request, Response } from "express";
// import path from "path";

// const app = express();
// app.use(express.json()); //middleware

// // GET request
// // curl -X GET http://localhost:3000
// app.get("/", (_, res: Response) => {
//   // Handle GET request logic here
//   res.send("GET request received");
// });

// // POST request
// // curl -X POST http://localhost:3000
// app.post("/", (_, res: Response) => {
//   res.send("POST request received");
// });

// // POST request
// // curl -X POST http://localhost:3000/test
// app.post("/test", (_, res: Response) => {
//   res.status(200).json({
//     firstName: "foo",
//     lastName: "bar",
//   });
// });

// // PUT request
// // curl -X PUT http://localhost:3000/123
// app.put("/:id", (req: Request, res: Response) => {
//   const userId = req.params.id;
//   res.send(`PUT request received for user with ID ${userId}`);
// });

// // DELETE request
// // curl -X PUT http://localhost:3000/456
// app.delete("/:id", (req: Request, res: Response) => {
//   const userId = req.params.id;
//   res.send(`DELETE request received for user with ID ${userId}`);
// });

// // GET request for a different route
// app.get("/greet", (_, res) => {
//   res.send("Greetings!");
// });

// // Serving static files
// app.use(express.static(path.join(__dirname, "../src/public")));

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
