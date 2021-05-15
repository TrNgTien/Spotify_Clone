const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const routes = require("./routes/index");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app);
// Listen to port
app.listen(PORT, () => {
  console.log(` Server is running in ${PORT}`);
});

module.exports = app;
