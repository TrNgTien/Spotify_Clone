const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const songsRoutes = require("./routes/songsRoutes");

app.use(cors());
app.use(express.json());

// Default port
app.get("/", (req, res) => res.send({ error: true, message: "Hello" }));

// Listen to port
app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});

module.exports = app;
