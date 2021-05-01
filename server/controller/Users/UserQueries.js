const dbconnection = require('../../database/db_connection');

const mysql = require("mysql");
    // TODO: Global database config
    const dbConfig = mysql.createConnection({
        user: "b4bb330a3f009b",
        host: "eu-cdbr-west-01.cleardb.com",
        password: "4be56a74",
        database: "heroku_1fcc54407741c0e",
      });

module.exports = {
    register: (data, callBack) => {
        dbConfig.query(
            `insert into users(username, password) 
                        values(?,?)`,
            [
                data.username,
                data.password
            ],
            (err, results, fields) => {
                if(err){
                    callBack(err);
                }
                else{
                    return callBack(null, results);
                }
            }
        )
    },
    
    getUserByUserName: (username, callback) => {
        dbConfig.query(
            `SELECT * FROM users WHERE username = ?`,
            [username],
            (error, results, fields) => {
                if(error){
                    callback(error);
                }
                else{
                    return callback(null, results[0]);
                }
            }
        )
    }
};