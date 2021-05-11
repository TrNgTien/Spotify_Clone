const mysql = require("mysql");

const dbConfig = mysql.createConnection({
  user: "b4bb330a3f009b",
  host: "eu-cdbr-west-01.cleardb.com",
  password: "4be56a74",
  database: "heroku_1fcc54407741c0e",
});

module.exports = {
  getPlaylists: (data, callBack) => {
    dbConfig.query(
      `SELECT songName, duration, uploadDate, numberOfLikes
      FROM songs, hasplaylists, users, playlists
      WHERE songs.songID = hasplaylists.songID 
      AND hasplaylists.playlistID = playlists.playlistID
      AND playlists.userID = users.userID`,
      [],
      (error, results) => {
        if (error) callBack(error, null);
        else return callBack(null, results);
      }
    );
  },
  postPlaylists: (data, callBack) => {
    dbConfig.query(
      `INSERT INTO playlists (playlistName)
      VALUES(?)`,
      [data.playlistName],
      (err, results) => {
        if (err) callBack(err, null);
        else return callBack(null, results);
      }
    );
  },

  deleteSongs: (data, callBack) => {
    dbConfig.query(
      `DELETE FROM users, songs, playlists, hasPlaylist
      WHERE songs.songID = hasPlaylist.songID
      AND hasPlaylists.playlistID = playlists.playlistID
      AND playlists.userID = users.userID
      AND songName = ?`,
      [data.songName],
      (error, results) => {
        if (error) callBack(error, null);
        else return callBack(null, results);
      }
    );
  },
};
