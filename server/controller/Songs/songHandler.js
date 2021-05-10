// const mysql = require("mysql");
// const sqlQuery = require("../../database/my_sql_query");
// const dbConnection = require("../../database/db_connection");


// const dbConfig = mysql.createConnection({
//   user: "b4bb330a3f009b",
//   host: "eu-cdbr-west-01.cleardb.com",
//   password: "4be56a74",
//   database: "heroku_1fcc54407741c0e",
// });
const  SONG_ATTRIBUTE = require( "./attribute");

// Get all songs
// module.exports.getSongs = async (req, res) => {
//   try {
//     let connection = await dbConnection();
//     let getSongsQuery = `SELECT * FROM songs`;
//     let result = await sqlQuery(connection, getSongsQuery);
//     // let result = dbConfig.query(`SELECT songName, uploadDate, numberOfLikes, duration FROM songs`)
//     connection.end();
//     return res.status(200).json({ data: result, message: "OK!" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "error",
//       error: error,
//     });
//   }
// };
const { getAllSongs, postSong } = require("./songQueries");
const song_att = require("../Songs/attribute");
function RequestHandler(err, results, res) {
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

module.exports = {
  getSongs: (req, res) => {
    getAllSongs((err, results) => RequestHandler(err, results, res));
    
  },
  postSongs: (req, res) => {
    let body = req.body;
    console.log("req body", body)
    postSong(body, (err, results) => RequestHandler(err, results, res));
  },
};

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

// class SongController {
//   // [GET] /songs
//   index(req, res) {
//     // console.log('req', req)
//     // res.render('songs')
//     // let connection = await dbConfig();
//     // let getSongsQuery = `SELECT songName, uploadDate, numberOfLikes, duration FROM songs`;
//     // let result = dbConfig.query(getSongsQuery)
//     // console.log('result', result)
//     // if (result.OkPacket) return res.status(200).send(result);
//   }

//   // ${song_att.songName},
//   // ${song_att.uploadDate},
//   // ${song_att.numberOfLikes},
//   // ${song_att.duration},
//   // ${song_att.genre},
//   // ${song_att.artist},
//   // ${song_att.duration},
//   // ${song_att.likeBy}

//   // [GET] /songs/:yea

//   show(req, res) {
//     // res.send("Song details");
//     let getSongsQuery = `SELECT songName, uploadDate, numberOfLikes, duration FROM songs`;
//     let result = dbConfig.query(getSongsQuery)
//     console.log('result', result)
//     if (result.OkPacket) return res.status(200).send(result);
//   }
// }

// module.exports = new SongController();
