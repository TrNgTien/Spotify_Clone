const sqlQuery = require("../../database/my_sql_query");
const dbConnection = require("../../database/db_connection");

import { SONG_ATTRIBUTE } from "./attribute";
import { getRandomInt } from "../../helper/id";

// Get all songs
module.exports.getAllSongs = async (data, res) => {
  try {
    let connection = await dbConnection();
    let getSongsQuery =
      "SELECT songname, uploadDate, numberOfLikes, duration FROM `songs`";
    let getSongs = await sqlQuery(connection, getSongsQuery);

    connection.end();
    return res.status(200).send(getSongs);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};

// Dealing when admin post song
module.exports.postSong = async (data, res) => {
  try {
    let connection = await dbConnection();
    let postSongsQuery = `
      INSERT INTO songs(
        ${SONG_ATTRIBUTE.songID},
        ${SONG_ATTRIBUTE.songName}, 
        ${SONG_ATTRIBUTE.uploadDate}, 
        ${SONG_ATTRIBUTE.numberOfLikes}, 
        ${SONG_ATTRIBUTE.duration}
      )
      VALUES(
        ${getRandomInt(10)},
        ${data.songName},
        ${data.uploadDate},
        ${data.numberOfLikes},
        ${data.duration}
      )
    `;
    let postSong = await sqlQuery(connection, postSongsQuery);

    connection.end();
    return res.status(200).send(postSong);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error",
      error: error,
    });
  }
};
