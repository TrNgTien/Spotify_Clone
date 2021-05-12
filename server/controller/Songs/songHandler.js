const sqlQuery = require("../../database/my_sql_query");
const dbConnection = require("../../database/db_connection");
const SongAttribute = require("../../model/Song");

// const {
//   getAllSongs,
//   postSongBasicInfo,
//   postSongArtistInfo,
//   postSongGenreInfo,
// } = require("./songQueries");

// Get songs
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
    return res.status(200).json({ data: result, message: "OK!" });
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
  let songParamBody = req.body;
  // let songParamForQuery = new SongAttribute(
  //   songParamBody.songName,
  //   songParamBody.uploadDate,
  //   songParamBody.numberOfLikes,
  //   songParamBody.duration
  // );
  try {
    let connection = await dbConnection();
    let getSongIdQuery = `SELECT songID FROM songs ORDER BY songID DESC LIMIT 1`;
    let getArtistIdQuery = `SELECT artistID FROM artists ORDER BY artistID DESC LIMIT 1`;
    let getGenreIdQuery = `SELECT genreID FROM genres ORDER BY genreID DESC LIMIT 1`;

    let getSongIdQueryResult = await sqlQuery(connection, getSongIdQuery);
    let getArtistIdQueryResult = await sqlQuery(connection, getArtistIdQuery);
    let getGenreIdQueryResult = await sqlQuery(connection, getGenreIdQuery);

    let newestSongId = getSongIdQueryResult[0].songID + 1;
    let newestArtistId = getArtistIdQueryResult[0].artistID + 1;
    let newestGenreId = getGenreIdQueryResult[0].genreID + 1;

    let postSongQueryBasic = `INSERT INTO songs (songID, songName, uploadDate, numberOfLikes, duration) VALUES (${newestSongId},?,?,?)`;
    let postSongQueryArtist = `INSERT INTO artists (artistID, artistName) VALUES (${newestArtistId},?)`;
    let postSongQueryGenre = `INSERT INTO genres (genreID, genreName) VALUES (${newestGenreId},?)`;

    let postSongQueryBasicResult = await sqlQuery(
      connection,
      postSongQueryBasic,
      [
        songParamBody.songName,
        songParamBody.uploadDate,
        songParamBody.numberOfLikes,
        songParamBody.duration,
      ]
    );
    let postSongQueryArtistResult = await sqlQuery(
      connection,
      postSongQueryArtist,
      [songParamBody.artistName]
    );
    let postSongQueryGenreResult = await sqlQuery(
      connection,
      postSongQueryGenre,
      [songParamBody.genreName]
    );

    connection.end();
    return res.status(200).json({ data: result, message: "OK!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};

function getRequestHandler(err, results, res) {
  if (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  } else {
    return res.status(200).json({
      message: "Connection Successfully!",
      data: results,
    });
  }
}
function postRequestHandler(err, res) {
  if (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  } else {
    return res.status(200).json({
      message: "Connection Successfully!",
    });
  }
}

// module.exports = {
//   getSongs: (req, res) => {
//     getAllSongs((err, results) => getRequestHandler(err, results, res));
//   },
//   postSongs: (req, res) => {
//     let body = req.body;
//     console.log("req body", body);
//     postSongBasicInfo(body, (err, results) => postRequestHandler(err, res));
//     postSongArtistInfo(body, (err, results) => postRequestHandler(err, res));
//     postSongGenreInfo(body, (err, results) => postRequestHandler(err, res));
//   },
// };

// // module.exports.getAllSongs = (req, res) => {
// //   // Gửi lên server
// //   const body = res.body;

// // }

// // Dealing when admin post song
// module.exports.postSong = async (data, res) => {
//   try {
//     let connection = await dbConfig();
//     let postSongsQuery = `
//       INSERT INTO songs(
//         ${song_att.songName},
//         ${song_att.uploadDate},
//         ${song_att.numberOfLikes},
//         ${song_att.duration}
//       )
//       VALUES(
//         ${data.songName},
//         ${data.uploadDate},
//         ${data.numberOfLikes},
//         ${data.duration}
//       )
//     `;

//     let postSong = await sqlQuery(connection, postSongsQuery);

//     connection.end();
//     return res.status(200).send(postSong);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "error",
//       error: error,
//     });
//   }
// };
