const sqlQuery = require("../../database/my_sql_query");
const dbConnection = require("../../database/db_connection");

module.exports.getArtists = async (req, res) => {
  try {
    let connection = await dbConnection();
    let getArtistsQuery = `SELECT * FROM artists`;
    let resultArtists = await sqlQuery(connection, getArtistsQuery);
    connection.end();
    return res
      .status(200)
      .json({ data: resultArtists, message: "Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};
