import { rest } from 'msw'
import { getTasks } from "./api/tasks";
import { getTask } from "./api/tasks";
import { postTasks } from "./api/tasks";

export const handlers = [
  // users

  // auth

  // tasks
  rest.get("http://localhost:3000/tasks", getTasks),
  rest.get("http://localhost:3000/tasks/:id", getTask),
  rest.post("http://localhost:3000/tasks", postTasks),

  // likes

  // followings

  // followers

  // relationships

  // notifications

  // searches
];