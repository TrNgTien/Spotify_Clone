const mysql = require("mysql");


const dbConfig = mysql.createConnection({
  user: "b4bb330a3f009b",
  host: "eu-cdbr-west-01.cleardb.com",
  password: "4be56a74",
  database: "heroku_1fcc54407741c0e",
});

module.exports = {
  postPlaylists: (data, callBack) => {
    dbConfig.query(
      `INSERT INTO playlists (playlistName)
      VALUES(?)`,
      [data.playlistName],
      (err, results, fields) => {
        if (err) {
          callBack(err);
        } else {
          return callBack(null, results);
        }
      }
    );
  },
  getPlaylists: (callBack) => {
    dbConfig.query(
      `SELECT songName, duration, uploadDate, numberOfLike
      FROM users, songs, playlists, hasPlaylist
      WHERE songs.songID = hasPlaylist.songID
      AND hasPlaylists.playlistID = playlists.playlistID
      AND playlists.userID = users.userID`,
      (error, results, fields) => {
        if (error) {
          callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },

  deleteSongs: (callBack) => {
    dbConfig.query(
      `DELETE songName, duration, uploadDate, numberOfLike
      FROM users, songs, playlists, hasPlaylist
      WHERE songs.songID = hasPlaylist.songID
      AND hasPlaylists.playlistID = playlists.playlistID
      AND playlists.userID = users.userID`,
      (error, results, fields) => {
        if (error) {
          callBack(error);
        } else {
          return callBack(null, results);
        }
    }
    );
}
}