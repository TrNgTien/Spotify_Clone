const mysql = require("mysql");
// TODO: Global database config
const dbConfig = mysql.createConnection({
    user: "b4bb330a3f009b",
    host: "eu-cdbr-west-01.cleardb.com",
    password: "4be56a74",
    database: "heroku_1fcc54407741c0e",
  });
  
  module.exports = async () =>
    new Promise((resolve, reject) => {
      const connection = mysql.createConnection(dbConfig);
  
      connection.connect((error) => {
        if (error) {
          reject(error);
  
          return;
        }
  
        resolve(connection);
      });
    });
  