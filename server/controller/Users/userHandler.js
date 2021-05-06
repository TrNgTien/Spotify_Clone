const { register, getUserByUserName, getUsers } = require("./UserQueries");

module.exports = {
  login: (req, res) => {
    let body = req.body;
    getUserByUserName(body.userName, (err, results) => {
      let result = body.password === results.password;
      if (err) {
        console.log(err);
      } else {
        if (!results) {
          return res.status(404).json({
            status: "Not Found!",
            message: "User Name doesn't exist!",
          });
        } else if (result) {
          return res.status(200).json({
            status: "OK",
            message: "Login successfully!",
          });
        } else {
          return res.status(400).json({
            status: "Bad Request!",
            message: "Invalid User Name or Password",
          });
        }
      }
    });
  },

  //Function get data of users
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        message: "Login successfully!",
        data: results,
      });
    });
  },

  //Function register users
  registerUser: (req, res) => {
    const body = req.body;
    register(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      } else {
        return res.status(200).json({
          message: "Register successfully!",
        });
      }
    });
  },
};
