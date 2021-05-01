const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const port = 8080;


app.use(cors());
app.use(express.json());

// Default port
app.get("/", (req, res) => res.send({ error: true, message: "Hello" }));

// Listen to port
app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});

module.exports = app;
