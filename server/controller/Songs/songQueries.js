const mysql = require("mysql");

const dbConfig = mysql.createConnection({
  user: "b4bb330a3f009b",
  host: "eu-cdbr-west-01.cleardb.com",
  password: "4be56a74",
  database: "heroku_1fcc54407741c0e",
});

const queryCallBackHandle = (err, results, fields, callBack) => {
  if (err) {
    callBack(err);
  } else {
    return callBack(null, results);
  }
};

module.exports = {
  getAllSongs: (callBack) => {
    dbConfig.query(
      `
      SELECT genreName, artistName, songName, uploadDate, numberOfLikes, duration
      FROM genres, songs, belongsto, artists, composeby
      WHERE genres.genreID = belongsto.genreID 
      AND artists.artistID = composeby.artistID
      AND belongsto.songID = songs.songID 
      AND composeby.songID = songs.songID
      `,
      [],
      (err, results, fields) =>
        queryCallBackHandle(err, results, fields, callBack)
    );
  },
  postSongBasicInfo: (data, callBack) => {
    dbConfig.query(
      `INSERT INTO songs (songName, uploadDate, numberOfLikes, duration) VALUES (?,?,?,?)`,
      [data.songName, data.uploadDate, data.numberOfLikes, data.duration],
      (err, results, fields) => queryCallBackHandle(err, results, fields)
    );
  },
  postSongArtistInfo: (data, callBack) => {
    dbConfig.query(
      `INSERT INTO artists (artistID,artistName) VALUES (?,?)`,
      [data.artistID, data.artistName],
      (err, results, fields) =>
        queryCallBackHandle(err, results, fields, callBack)
    );
  },
  postSongGenreInfo: (data, callBack) => {
    dbConfig.query(
      `INSERT INTO genres (genreID,genreName) VALUES (?,?)`,
      [data.genreID, data.genreName],
      (err, results, fields) =>
        queryCallBackHandle(err, results, fields, callBack)
    );
  },
};
