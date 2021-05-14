const db_connection = require("../../database/db_connection");
const sqlQuery = require("../../database/my_sql_query");
const ATTRIBUTE = require("./playlistAttribute");
module.exports.postPlaylists = async (req, res) => {
  try {
    let playlistName = req.body.playlistName;
    let userID = req.body.userID;
    let connection = await db_connection();

    //-------------------Query get newest ID ----------------------
    let query = `SELECT playlistID FROM playlists ORDER BY playlistID DESC LIMIT 1`;
    let result = await sqlQuery(connection, query);
    let newestID = result[0].playlistID;
    let finalID = newestID + 1;
    //--------------------------Query playlist newest ID------------------------

    let queryInsert = `INSERT INTO playlists (playlistID, playlistName, userID) VALUES ( ${finalID}, ?, ${userID} )`;
    let insertResults = await sqlQuery(connection, queryInsert, [playlistName]);
    connection.end();
    return res.status(200).json({
      message: "Insert Successfully!",
    });
  } catch (e) {
    console.log(e);
    return res.json({
      error: e,
    });
  }
};
module.exports.getPlaylists = async (req, res, next) => {
  try {
    let connection = await db_connection();
    let query = `SELECT ${ATTRIBUTE.playlistName}, 
          songs.${ATTRIBUTE.songID},
          ${ATTRIBUTE.songName}, 
          ${ATTRIBUTE.uploadDate}, 
          ${ATTRIBUTE.numberOfLikes}, 
          ${ATTRIBUTE.duration}    
          FROM  users, playlists, hasplaylists, songs
          WHERE playlists.userID = users.userID
          AND  hasplaylists.playlistID = playlists.playlistID
          AND hasplaylists.songID = songs.songID`;
    let result = await sqlQuery(connection, query);
    connection.end();
    if (result.length == 0) {
      return res.json({
        message: "No data avaiable!",
      });
    } else {
      return res.send(result);
    }
  } catch (e) {
    console.log(e);
    return res.json({
      error: e,
    });
  }
};
// module.exports.deleteSongs = async (req, res) => {
//   let songDelete = req.body.songName;
//   try {
//     let connection = await db_connection();
//     let query = `DELETE FROM users, songs, playlists, hasPlaylist
//     WHERE songs.songID = hasPlaylist.songID
//     AND hasPlaylists.playlistID = playlists.playlistID
//     AND playlists.userID = users.userID
//     AND songName = ?`;
//     let result = await sqlQuery(connection, query, [songDelete]);
//     connection.end();
//     return res.send("Succesful!");
//   } catch (e) {
//     console.log(e);
//     return res.json({
//       error: e,
//     });
//   }
// };
