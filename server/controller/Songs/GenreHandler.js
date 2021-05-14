const sqlQuery = require("../../database/my_sql_query");
const dbConnection = require("../../database/db_connection");
module.exports.getGenres = async (req, res) => {
  try {
    let connection = await dbConnection();
    let getGenreQuery = `SELECT * FROM genres`;
    let resultGenre = await sqlQuery(connection, getGenreQuery);
    connection.end();
    return res
      .status(200)
      .json({ data: resultGenre, message: "Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};
