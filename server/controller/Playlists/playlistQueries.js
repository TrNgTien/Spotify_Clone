// const mysql = require("mysql");

// const dbConfig = mysql.createConnection({
//   user: "b4bb330a3f009b",
//   host: "eu-cdbr-west-01.cleardb.com",
//   password: "4be56a74",
//   database: "heroku_1fcc54407741c0e",
// });

// module.exports = {
//   // getPlaylists: (data, callBack) => {
//   //   dbConfig.query(
//   //     `SELECT 
//   //     playlistName, 
//   //     songs.songID, 
//   //     songName, 
//   //     uploadDate, 
//   //     numberOfLikes, 
//   //     duration    
//   //   FROM  users, playlists, hasplaylists, songs
//   //   WHERE playlists.userID = users.userID
//   //   AND  hasplaylists.playlistID = playlists.playlistID
//   //   AND hasplaylists.songID = songs.songID;`,
//   //     [],
//   //     (error, results) => {
//   //       if (error) {
//   //         callBack(error, null);
//   //       }
//   //       return callBack(null, results);
//   //     }
//   //   );
//   // },
//   // postPlaylists: (data, callBack) => {
//   //   dbConfig.query(
//   //     `INSERT INTO playlists (playlistName)
//   //     VALUES(?)`,
//   //     [data.playlistName],
//   //     (err, results) => {
//   //       if (err) {
//   //         callBack(err);
//   //       } else return callBack(null, results);
//   //     }
//   //   );
//   // },

//   // deleteSongs: (data, callBack) => {
//   //   dbConfig.query(
//   //     `DELETE FROM users, songs, playlists, hasPlaylist
//   //     WHERE songs.songID = hasPlaylist.songID
//   //     AND hasPlaylists.playlistID = playlists.playlistID
//   //     AND playlists.userID = users.userID
//   //     AND songName = ?`,
//   //     [data.songName],
//   //     (error, results) => {
//   //       if (error) {
//   //         callBack(error);
//   //       } else return callBack(null, results);
//   //     }
//   //   );
//   // },
// };
