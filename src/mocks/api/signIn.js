export const signIn = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(
      {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFhYSIsImlhdCI6MTUxNjIzOTAyMn0.EGPXqAISRllNGO_B8aYZkgmlet8KbVXGaXTkJcQqezw",
        user: {
          // ログイン中のcurrentUserをaaaとする。
          id: "1",
          username: "aaa",
          nickname: "aaa",
        }
      }
    ),
  )
};