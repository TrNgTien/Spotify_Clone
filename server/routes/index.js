const songRouter = require("./songsRoutes");
const userRouter = require("./usersRoutes");

function routes(app) {
  app.get("/", (req, res) => res.send({ error: true, message: "Hello" }));
  app.use("/userForm", userRouter);
  app.use("/songs", songsRoutes);
  app.use("/playlists", playlistRoutes);
}

module.exports = routes;
