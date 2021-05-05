const {
    register,
    getUserByUserName,
    getUsers
    } = require("./UserQueries");  






module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        register(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            else{
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            }
        });
    },


    login: (req, res) => {
        const body = req.body;
        getUserByUserName(body.username, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                success: 0,
                data: "Invalid userName or password"
                });
            }
            const result = body.password === results.password;
            if (result) {
                results.password = undefined;
                    return res.json({
                    success: 1,
                    message: "login successfully",
                    });
            } else {
                return res.json({
                success: 0,
                data: "Invalid userName or password"
                });
            }
        });
    },
    getUsers: (req, res) => {
      getUsers((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
}