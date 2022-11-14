import { rest } from "msw";

export const get = [
  rest.get("/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          username: "111",
          nickname: "aaa",
        },
        {
          id: 2,
          username: "222",
          nickname: "bbb",
        },
        {
          id: 3,
          username: "333",
          nickname: "ccc",
        },
      ])
    );
  }),
];