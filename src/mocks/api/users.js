export const getCurrentUser = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(
      {
        // todo: userでラップするのはAPI的にどうなの？無くした方が良い？
        user: {
          id: "1",
          username: "aaa",
          nickname: "aaa"
        }
      }
    ),
  )
};