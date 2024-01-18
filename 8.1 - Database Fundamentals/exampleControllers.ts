// import bcryptjs from "bcryptjs";
// import { Request, Response } from "express";
// import { Repository } from "typeorm";
// import { dataSource } from "../dataSource";
// import { Notification } from "../entities/Notification";
// import { User } from "../entities/User";

// export const getAllUsers = async (_: Request, res: Response) => {
//   const users = await User.find();
//   console.log(users);
//   if (users.length === 0) {
//     return res.status(404).send("No users found");
//   }

//   return res.status(200).json(users);
// };

// // curl -X DELETE -H "Content-Type: application/json" -d '{"id": 2}' http://localhost:3000/api/users
// export const deleteUser = async (req: Request, res: Response) => {
//   //NOTE - check authentication first. If not authenticated, return 401. do this with middleware
//   const userId: number = Number(req.params.userID);
//   const user: User[] = await User.find({ where: { id: userId } });
//   if (user.length === 0) {
//     return res.status(404).send("User not found");
//   }
//   await User.delete({ id: userId });
//   return res.status(200).send(user[0]);
// };

// // curl -X POST -H "Content-Type: application/json" -d '{"username": "colin", "email": "colin", "password": "colin"}' http://localhost:3000/api/users
// export const createUser = async (req: Request, res: Response) => {
//   //TODO - add logic for checking if user already exists
//   const { username, password, email } = req.body;

//   const hashedPassword = await bcryptjs.hash(password, 10);
//   let user;

//   try {
//     const result = await dataSource
//       .createQueryBuilder()
//       .insert()
//       .into(User)
//       .values({
//         username: username,
//         password: hashedPassword,
//         email: email,
//       })
//       .returning("*")
//       .execute();
//     user = result.raw[0];
//   } catch (err) {
//     //code taken from stack trace
//     if (err.code === "23505") {
//       return res.status(400).send("User already exists");
//     }
//   }

//   return res
//     .status(201)
//     .json({ message: "User created successfully", user: user });
// };

// // curl -X GET http://localhost:3000/users/colin
// export const getNotificationsByUser = async (req: Request, res: Response) => {
//   console.log("getNotificationsByUser called");
//   const username: string = req.params.username;
//   const user: User[] = await User.find({ where: { username: username } });
//   if (user.length === 0) {
//     return res.status(404).send("User not found");
//   }
//   return res.status(200).send(user[0]);
// };

// export const createNotification = async (req: Request, res: Response) => {
//   console.log("createNotification called");
//   const notificationMsg: string = req.body.notification;
//   const username: string = req.params.username;

//   const userRepository: Repository<User> = dataSource.getRepository(User);
//   const notificationRepository: Repository<Notification> =
//     dataSource.getRepository(Notification);

//   let user: User | null = await userRepository.findOne({
//     where: { username: username },
//   });
//   if (!user) {
//     return res.status(404).send("User not found");
//   }

//   let notification = new Notification();
//   notification.text = notificationMsg;
//   notification.read = false;
//   notification.owner = user;
//   notification.creatorId = user.id;

//   notification = await notificationRepository.save(notification);
//   return res.status(201).send(notification);
// };
