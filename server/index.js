const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const songsRoutes = require("./routes/songsRoutes");
const userRouter = require("./routes/usersRoutes");
const routes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Default port
// app.get("/", (req, res) => res.send({ error: true, message: "Hello" }));
// app.use("/userForm", userRouter);
// app.use("/selectSong", songsRoutes);

// app.get("/getMySong", (req, res) => {
//   res.render("songs")
// })

// Listen to port
app.listen(PORT, () => {
  console.log(` Server is running in ${PORT}`);
});

routes(app);

module.exports = app;
