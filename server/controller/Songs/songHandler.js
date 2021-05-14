const sqlQuery = require("../../database/my_sql_query");
const dbConnection = require("../../database/db_connection");
// const SongAttribute = require("../../model/Song");

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
    let artistIDQuery = `SELECT artistName FROM artists WHERE artistName = '${artistName}' `;
    let genreIDQuery = `SELECT genreName FROM genres WHERE genreName = '${genreName}'`;

    let getArtistIDQueryResult = await sqlQuery(connection, artistIDQuery);
    let getGenreIDQueryResult = await sqlQuery(connection, genreIDQuery);

    if (
      getArtistIDQueryResult.length === 0 ||
      getGenreIDQueryResult.length === 0
    ) {
      let getSongsID = `SELECT songID FROM songs ORDER BY songID DESC LIMIT 1`;
      let getSongsIDQueryResult = await sqlQuery(connection, getSongsID);

      let newestSongID = getSongsIDQueryResult[0].songID;
      let insertArtistName = `INSERT INTO artists (artistName) VALUES (?)`;
      let ArtistName = await sqlQuery(connection, insertArtistName, [
        artistName,
      ]);
      let artistIDQuery = `SELECT artistID FROM artists WHERE artistName = '${artistName}' ORDER BY artistID DESC LIMIT 1`;
      let genreIDQuery = `SELECT genreID FROM genres WHERE genreName = '${genreName}' ORDER BY genreID DESC LIMIT 1`;
      let getArtistIDQueryResult = await sqlQuery(connection, artistIDQuery);
      let getGenreIDQueryResult = await sqlQuery(connection, genreIDQuery);

      let resultArtistID = getArtistIDQueryResult[0].artistID;
      let resultGenreID = getGenreIDQueryResult[0].genreID;
      // ------------------------------Insert Song---------------------------
      let postSongInfoQuery = `INSERT INTO songs (songName, uploadDate, duration) VALUES (?, ?, ?)`;
      let postSongQueryBasicResult = await sqlQuery(
        connection,
        postSongInfoQuery,
        [songName, uploadDate, duration]
      );

      let postComposeByQuery = `INSERT INTO composeby (artistID, songID) VALUES (${resultArtistID}, ${newestSongID})`;
      let postSongQueryComposeByResult = await sqlQuery(
        connection,
        postComposeByQuery  
      );
      let postBelongsToQuery = `INSERT INTO belongsto (genreID, songID) VALUES (${resultGenreID}, ${newestSongID})`;

      let postSongQueryBelongsToResult = await sqlQuery(
        connection,
        postBelongsToQuery
      );
      connection.end();
      return res.status(200).json({
        message: "Insert Successfully!",
      });
    } else {
      let getSongsID = `SELECT songID FROM songs ORDER BY songID DESC LIMIT 1`;
      let getSongsIDQueryResult = await sqlQuery(connection, getSongsID);

      let newestSongID = getSongsIDQueryResult[0].songID;
      let artistIDQuery = `SELECT artistID FROM artists WHERE artistName = '${artistName}' ORDER BY artistID DESC LIMIT 1`;
      let genreIDQuery = `SELECT genreID FROM genres WHERE genreName = '${genreName}' ORDER BY genreID DESC LIMIT 1`;
      let getArtistIDQueryResult = await sqlQuery(connection, artistIDQuery);
      let getGenreIDQueryResult = await sqlQuery(connection, genreIDQuery);
      let resultArtistID = getArtistIDQueryResult[0].artistID;
      let resultGenreID = getGenreIDQueryResult[0].genreID;
      // ------------------------------Insert Song---------------------------
      let postSongInfoQuery = `INSERT INTO songs (songName, uploadDate, duration) VALUES (?, ?, ?)`;
      let postSongQueryBasicResult = await sqlQuery(
        connection,
        postSongInfoQuery,
        [songName, uploadDate, duration]
      );
      let postComposeByQuery = `INSERT INTO composeby (artistID, songID) VALUES (${resultArtistID}, ${newestSongID})`;
    
      let postSongQueryComposeByResult = await sqlQuery(
        connection,
        postComposeByQuery
      );

      let postBelongsToQuery = `INSERT INTO belongsto (genreID, songID) VALUES (${resultGenreID}, ${newestSongID})`;
      let postSongQueryBelongsToResult = await sqlQuery(
        connection,
        postBelongsToQuery
      );
      connection.end();
      return res.status(200).json({
        message: "Insert Successfully!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};
