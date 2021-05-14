const sqlQuery = require("../../database/my_sql_query");
const dbConnection = require("../../database/db_connection");
const USER_ATTRIBUTE = require("./userAttribute");

module.exports.register = async (req, res) => {
  let userName = req.body.userName;
  try {
    let connection = await dbConnection();
    let registerQuery = `INSERT INTO users (${USER_ATTRIBUTE.userName},${USER_ATTRIBUTE.password},) 
    VALUES ('${userName}', '${userName}')`;
    let getUserNameQuery = `SELECT userName FROM users WHERE userName = '${userName}'`;
    let getUserName = await sqlQuery(connection, getUserNameQuery);
    let createUser = await sqlQuery(connection, registerQuery);
    connection.end();
    if (getUserName.length !== 0) {
      res.json({
        message: "Username has already existed",
      });
    } else {
      res.json({
        message: "Register Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

module.exports.login = async (req, res) => {
  try {
    let userName = req.body.userName;
    let password = req.body.password;
    let connection = await dbConnection();
    let getUserNameQuery = `SELECT userName FROM users WHERE userName = '${userName}'`;
    let getPasswordQuery = `SELECT password FROM users WHERE password = '${password}'`;
    let getUserName = await sqlQuery(connection, getUserNameQuery);
    let getPassword = await sqlQuery(connection, getPasswordQuery);
    connection.end();
    if (getUserName.length === 0) {
      return res.json({
        message: "Invalid userName or password",
      });
    } else if (getPassword.length === 0) {
      return res.json({
        message: "Invalid userName or password",
      });
    } else {
      return res.status(200).json({
        message: "Login Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    let userName = req.query.userName;
    let password = req.query.password;
    let connection = await dbConnection();
    let getUsersQuery = `SELECT userstype.typeName FROM users, userstype 
      WHERE userName = ?  AND password = ? AND users.userTypeID = userstype.userTypeID`;
    let userInfo = await sqlQuery(connection, getUsersQuery, [
      userName,
      password,
    ]);
    let finalResult = userInfo[0];
    connection.end();
    return res.status(200).json({ data: finalResult, message: "OK!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};
