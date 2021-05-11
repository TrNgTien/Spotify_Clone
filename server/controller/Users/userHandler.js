const { register, getUserByUserName, getUsers } = require("./UserQueries");

const sqlQuery = require("../../database/my_sql_query");
const dbConnection = require("../../database/db_connection");
const USER_ATTRIBUTE = require("./userAttribute");


module.exports.register = async(req, res) => {
  const body = req.body;
  try{
    let connection = await dbConnection();
    let registerQuery = 
    `INSERT INTO users
      (
        ${USER_ATTRIBUTE.userName}, 
        ${USER_ATTRIBUTE.password}, 
        ${USER_ATTRIBUTE.userTypeID}
      ) 
      VALUES 
      ('${body.userName}', '${body.password}', 0)`;
    let createUser = await sqlQuery(connection, registerQuery);
    console.log(createUser);
    connection.end();
    return res.status(200).json({
      message: "Register Successfully"
    });
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      message: error
    });
  }
};

module.exports.login = async (req, res) => {
  const body = req.body;
  try {
    let connection = await dbConnection();
    let getUserNameQuery = `SELECT userName FROM users WHERE userName = '${body.userName}'`;
    let getPasswordQuery = `SELECT password FROM users WHERE password = '${body.password}'`;
    let getUserName = await sqlQuery(connection, getUserNameQuery);
    let getPassword = await sqlQuery(connection, getPasswordQuery);
    connection.end();
    //  TRY TO REFACTOR LOGIN (MY LOGIC, BUT IT CANNOT USE WHEN MANY USERS HAVE THE SAME PASSWORD)
    //let user_name = JSON.stringify(getUserName);
    //let username1 = user_name.indexOf(body.userName);
    //let username2 = user_name.lastIndexOf('"');
    //let final_userName = user_name.slice(username1, username2);
    //let password = JSON.stringify(getPassword);
    //let password1 = password.indexOf(body.password);
    //let password2 = password.lastIndexOf('"');
    //let final_password = user_name.slice(password1, password2);
    //console.log(getUserName);
    //console.log(getPassword);
    if(getUserName !== body.userName){
      return res.status(500).json({
        message: "Invalid userName or password"
      })
    }
    else if(getPassword !== body.password){
      return res.status(500).json({
        message: "Invalid userName or password"
      })
    }
    else {
      return res.status(200).json({
        message: "login successfully"
      })
    }
  }
  catch(error) {
    console.log(error);
    res.status(500).json({
      message: error
    })
  };
}

module.exports.getUsers = async (req, res) => {
    try {
      let connection = await dbConnection();
      let getUsersQuery = `SELECT * FROM users`;
      let getUser = await sqlQuery(connection, getUsersQuery);
      connection.end();
      console.log(getUser);
      return res.status(200).json({ data: getUser, message: "OK!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        message: "error",
        error: error,
        });
    }
};