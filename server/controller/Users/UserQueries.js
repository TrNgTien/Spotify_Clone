// const dbconnection = require('../../database/db_connection');
const mysql = require("mysql");
const ATTRIBUTE = require("./userAttribute");

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
      `INSERT INTO users(${ATTRIBUTE.userName}, ${ATTRIBUTE.password}, ${ATTRIBUTE.userTypeID}) 
                        VALUES(?,?,0)`,
      [data.userName, data.password],
      (err, results, fields) => {
        if (err) {
          callBack(err);
        } else {
          return callBack(null, results);
        }
      }
    );
  },

  getUserByUserName: (userName, callBack) => {
    dbConfig.query(
      `SELECT * FROM users WHERE ${ATTRIBUTE.userName} = ?`,
      [userName],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        } else {
          return callBack(null, results[0]);
        }
      }
    );
  },

  getUsers: (callBack) => {
    dbConfig.query(
      `SELECT userID, ${ATTRIBUTE.userName}, ${ATTRIBUTE.password}, users.${ATTRIBUTE.userTypeID}, userstype.${ATTRIBUTE.typeName} 
           FROM users, userstype
           WHERE users.${ATTRIBUTE.userTypeID} = userstype.${ATTRIBUTE.userTypeID}`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
