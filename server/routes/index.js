const songRoutes = require("./songsRoutes");
const userRouter = require("./usersRoutes");
const playlistRoutes = require("./playlistRoutes");

function routes(app) {
  app.get("/", (req, res) => res.send({ error: true, message: "Hello" }));
  app.use("/userForm", userRouter);
  app.use("/songs", songRoutes);
  app.use("/playlists", playlistRoutes);
}

module.exports = routes;
