const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
// const songsRoutes = require("./routes/songsRoutes");
const userRouter = require("./routes/usersRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Default port
app.get("/", (req, res) => res.send({ error: true, message: "Hello" }));
app.use("/userForm", userRouter);

// Listen to port
app.listen(PORT, () => {
  console.log(` Server is running in ${PORT}`);
});

module.exports = app;
