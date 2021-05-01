const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Default port
app.get("/", (req, res) => res.send({ error: true, message: "Hello" }));

// Listen to port
app.listen(3000, () => {
  console.log("Node app is running on port 3000");
});

module.exports = app;
