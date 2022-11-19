import { rest } from 'msw';
import { signIn } from "./api/signIn";
// import { getTasks } from "./api/tasks";
// import { getTask } from "./api/tasks";
// import { postTasks } from "./api/tasks";
import { db } from "./db";

export const handlers = [
  // users
  ...db.user.toHandlers('rest', 'http://localhost:3000'),

  // auth
  rest.post("http://localhost:3000/users/sign_in", signIn),

  // tasks
  // rest.get("http://localhost:3000/tasks", getTasks),
  // rest.get("http://localhost:3000/tasks/:id", getTask),
  // rest.post("http://localhost:3000/tasks", postTasks),

  // Create REST API request handlers based on
  // the "task" database model.
  ...db.task.toHandlers('rest', 'http://localhost:3000'),

  // likes

  // followings

  // followers

  // relationships

  // notifications

  // searches
];