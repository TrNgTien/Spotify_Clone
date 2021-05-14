const sqlQuery = require("../../database/my_sql_query");
const dbConnection = require("../../database/db_connection");
const songFunction = require("./SongFunction");

module.exports.getSongs = async (req, res) => {
  try {
    let connection = await dbConnection();
    let getSongsQuery = `
      SELECT genreName, artistName, songName, uploadDate, numberOfLikes, duration
      FROM genres, songs, belongsto, artists, composeby
      WHERE genres.genreID = belongsto.genreID 
      AND artists.artistID = composeby.artistID
      AND belongsto.songID = songs.songID 
      AND composeby.songID = songs.songID
    `;
    let result = await sqlQuery(connection, getSongsQuery);
    connection.end();
    return res.status(200).json({ data: result, message: "Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};

// Post songs
module.exports.postSongs = async (req, res) => {
  try {
    let connection = await dbConnection();
    let songName = req.body.songName;
    let uploadDate = req.body.uploadDate;
    let duration = req.body.duration;
    let artistName = req.body.artistName;
    let genreName = req.body.genreName;
    // let numberOfLikes = req.body.numberOfLikes;

    //Insert the artistID, genreID for composeBy & belongsTo table
    //To know what song of which genre and whose compose the song
    let artistNameQuery = `SELECT artistName FROM artists WHERE artistName = '${artistName}' `;
    let genreNameQuery = `SELECT genreName FROM genres WHERE genreName = '${genreName}'`;

    let getArtistNameResult = await sqlQuery(connection, artistNameQuery);
    let getGenreNameResult = await sqlQuery(connection, genreNameQuery);

    if (getArtistNameResult.length !== 0 && getGenreNameResult.length !== 0) {
      songFunction.AllExisted(
        artistName,
        songName,
        uploadDate,
        duration,
        genreName,
        connection,
        sqlQuery,
        res
      );
    } else if (
      getArtistNameResult.length !== 0 &&
      getGenreNameResult.length === 0
    ) {
      songFunction.ArtistExisted(
        artistName,
        songName,
        uploadDate,
        duration,
        genreName,
        connection,
        sqlQuery,
        res
      );
    } else if (
      getArtistNameResult.length === 0 &&
      getGenreNameResult.length !== 0
    ) {
      songFunction.GenreExisted(
        artistName,
        songName,
        uploadDate,
        duration,
        genreName,
        connection,
        sqlQuery,
        res
      );
    } else {
      songFunction.RemainningCondition(
        artistName,
        songName,
        uploadDate,
        duration,
        genreName,
        connection,
        sqlQuery,
        res
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};
