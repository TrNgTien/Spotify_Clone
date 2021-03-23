const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const port = 3001;


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employeedb",
});


app.post("/create", (req, res) => {
  const name = req.body.name;
  const employeeCode = req.body.employeeCode;
  const salary = req.body.salary;

  db.query("INSERT INTO employee (name, employeeCode, salary) VALUES (?, ?, ?)", [
    name,
    employeeCode,
    salary,
  ],(err, result) => {
      if(err) console.log(err)
      else res.send("Values are inserted !!")
  });
});

app.get("/data", (req,res) => {
    db.query("SELECT * FROM employee", (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});
