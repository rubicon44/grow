// import { db } from "../db";

// export const getTasks = (req, res, ctx) => {
//   return res(
//     ctx.status(200),
//     ctx.json(
//     //   [
//     //   {
//     //     id: 1,
//     //     title: "task1",
//     //     content: "111",
//     //     status: 0,
//     //     start_date: "2022-11-10",
//     //     end_date: "2022-11-11",
//     //     user: {
//     //       id: 1,
//     //       username: "111",
//     //       nickname: "111",
//     //     }
//     //   },
//     //   {
//     //     id: 2,
//     //     title: "task2",
//     //     content: "222",
//     //     status: 1,
//     //     start_date: "2022-11-11",
//     //     end_date: "2022-11-12",
//     //     user: {
//     //       id: 2,
//     //       username: "222",
//     //       nickname: "111",
//     //     }
//     //   },
//     // ]
//     ),
//   )
// };

// export const getTask = (req, res, ctx) => {
//   const { id: userId } = req.params;
//   return res(
//     ctx.status(200),
//     ctx.json(
//       {
//         id: userId,
//         title: "task" + userId,
//         content: userId + userId + userId,
//         status: 0,
//         start_date: "2022-11-10",
//         end_date: "2022-11-11",
//         user_id: userId,
//         user: {
//           id: userId,
//           username: userId + userId + userId,
//           nickname: userId + userId + userId,
//         },
//       },
//     ),
//   )
// };

// export const postTasks = (req, res, ctx) => {
//   const id = 1;
//   const { title } = req.body;
//   const { content } = req.body;
//   const { status } = req.body;
//   const { start_date } = req.body;
//   const { end_date } = req.body;
//   const task = {
//     id,
//     title,
//     content,
//     status,
//     start_date,
//     end_date,
//   }

//   const created = db.task.create(task);
//   return res(
//     ctx.status(201),
//     ctx.json(created)
//     );
// };