const songRouter = require("./songsRoutes");
const userRouter = require('./usersRoutes')

function routes(app) {
  app.use("/songs", songRouter);
  app.use("/userForm", userRouter);
  app.get("/", (req, res) => res.send({ error: true, message: "Hello" }));
}

module.exports = routes;
