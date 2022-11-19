import { rest } from 'msw';
import { signIn } from "./api/signIn";
import { getCurrentUser } from "./api/users";
// import { getTasks } from "./api/tasks";
// import { getTask } from "./api/tasks";
// import { postTasks } from "./api/tasks";
import { db } from "./db";

export const handlers = [
  ...db.user.toHandlers('rest', 'http://localhost:3000'),
  ...db.task.toHandlers('rest', 'http://localhost:3000'),
  rest.post("http://localhost:3000/users/sign_in", signIn),
  rest.get("http://localhost:3000/:username", getCurrentUser),

  // likes

  // followings

  // followers

  // relationships

  // notifications

  // searches
];