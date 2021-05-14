module.exports.AllExisted = async (
  artistName,
  songName,
  uploadDate,
  duration,
  genreName,
  connection,
  sqlQuery,
  res
) => {
  let artistIDQuery = `SELECT artistID FROM artists WHERE artistName = '${artistName}' `;
  let genreIDQuery = `SELECT genreID FROM genres WHERE genreName = '${genreName}' `;
  let getArtistIDResult = await sqlQuery(connection, artistIDQuery);
  let getGenreIDResult = await sqlQuery(connection, genreIDQuery);

  let resultArtistID = getArtistIDResult[0].artistID;
  let resultGenreID = getGenreIDResult[0].genreID;

  // ------------------------------Insert Song---------------------------
  let postSongInfoQuery = `INSERT INTO songs (songName, uploadDate, duration) VALUES (?, ?, ?)`;
  let postSongResult = await sqlQuery(connection, postSongInfoQuery, [
    songName,
    uploadDate,
    duration,
  ]);
  //------------------------Get the newest songID-----------------------------------
  let getSongsID = `SELECT songID FROM songs ORDER BY songID DESC LIMIT 1`;
  let getSongsIDQueryResult = await sqlQuery(connection, getSongsID);
  let newestSongID = getSongsIDQueryResult[0].songID;

  let postComposeByQuery = `INSERT INTO composeby (artistID, songID) VALUES (${resultArtistID}, ${newestSongID})`;
  let postSongComposeByResult = await sqlQuery(connection, postComposeByQuery);
  let postBelongsToQuery = `INSERT INTO belongsto (genreID, songID) VALUES (${resultGenreID}, ${newestSongID})`;
  let postSongBelongsToResult = await sqlQuery(connection, postBelongsToQuery);

  connection.end();
  return res.status(200).json({
    message: "Insert Successfully!",
  });
};
module.exports.ArtistExisted = async (
  artistName,
  songName,
  uploadDate,
  duration,
  genreName,
  connection,
  sqlQuery,
  res
) => {
  //----------------Get artistID with the same artistName of user's input---------------------------
  let artistIDQuery = `SELECT artistID FROM artists WHERE artistName = '${artistName}' `;
  let getArtistIDResult = await sqlQuery(connection, artistIDQuery);
  let resultArtistID = getArtistIDResult[0].artistID;

  //---------------------Insert genreName to table genres-------------------------
  let insertGenreNameQuery = `INSERT INTO genres (genreName) VALUES( ? ) `;
  let getInsertGenreNameResult = await sqlQuery(
    connection,
    insertGenreNameQuery,
    [genreName]
  );

  //-------------------Get the newest genreID to insert genreID to in table belongsTo-----------------------
  let getGenreID = `SELECT genreID FROM genres ORDER BY genreID DESC LIMIT 1`;
  let getGenreIDQueryResult = await sqlQuery(connection, getGenreID);
  let newestGenreID = getGenreIDQueryResult[0].genreID;

  // ------------------------------Insert Song---------------------------
  let postSongInfoQuery = `INSERT INTO songs (songName, uploadDate, duration) VALUES (?, ?, ?)`;
  let postSongResult = await sqlQuery(connection, postSongInfoQuery, [
    songName,
    uploadDate,
    duration,
  ]);
  //------------------------Get the newest songID-----------------------------------
  let getSongsID = `SELECT songID FROM songs ORDER BY songID DESC LIMIT 1`;
  let getSongsIDQueryResult = await sqlQuery(connection, getSongsID);
  let newestSongID = getSongsIDQueryResult[0].songID;

  let postComposeByQuery = `INSERT INTO composeby (artistID, songID) VALUES (${resultArtistID}, ${newestSongID})`;
  let postSongComposeByResult = await sqlQuery(connection, postComposeByQuery);

  let postBelongsToQuery = `INSERT INTO belongsto (genreID, songID) VALUES (${newestGenreID}, ${newestSongID})`;
  let postSongBelongsToResult = await sqlQuery(connection, postBelongsToQuery);

  connection.end();
  return res.status(200).json({
    message: "Insert Successfully!",
  });
};
module.exports.GenreExisted = async (
  artistName,
  songName,
  uploadDate,
  duration,
  genreName,
  connection,
  sqlQuery,
  res
) => {
  //----------------Get genreID with the same genreName of user's input---------------------------
  let genreIDQuery = `SELECT genreID FROM genres WHERE genreName = '${genreName}' `;
  let getGenreIDResult = await sqlQuery(connection, genreIDQuery);
  let resultGenreID = getGenreIDResult[0].genreID;

  //---------------------Insert artistName to table artists-------------------------
  let insertArtistQuery = `INSERT INTO artists (artistName) VALUES( ? ) `;
  let getInsertArtistResult = await sqlQuery(connection, insertArtistQuery, [
    artistName,
  ]);

  //-------------------Get the newest artistID to insert artistID to in table composeby-----------------------
  let getArtistID = `SELECT artistID FROM artists ORDER BY artistID DESC LIMIT 1`;
  let getArtistIDQueryResult = await sqlQuery(connection, getArtistID);
  let newestArtistID = getArtistIDQueryResult[0].artistID;

  // ------------------------------Insert Song---------------------------
  let postSongInfoQuery = `INSERT INTO songs (songName, uploadDate, duration) VALUES (?, ?, ?)`;
  let postSongResult = await sqlQuery(connection, postSongInfoQuery, [
    songName,
    uploadDate,
    duration,
  ]);
  //------------------------Get the newest songID-----------------------------------
  let getSongsID = `SELECT songID FROM songs ORDER BY songID DESC LIMIT 1`;
  let getSongsIDQueryResult = await sqlQuery(connection, getSongsID);
  let newestSongID = getSongsIDQueryResult[0].songID;

  let postComposeByQuery = `INSERT INTO composeby (artistID, songID) VALUES (${newestArtistID}, ${newestSongID})`;
  let postSongComposeByResult = await sqlQuery(connection, postComposeByQuery);

  let postBelongsToQuery = `INSERT INTO belongsto (genreID, songID) VALUES (${resultGenreID}, ${newestSongID})`;
  let postSongBelongsToResult = await sqlQuery(connection, postBelongsToQuery);
  connection.end();
  return res.status(200).json({
    message: "Insert Successfully!",
  });
};
module.exports.RemainningCondition = async (
  artistName,
  songName,
  uploadDate,
  duration,
  genreName,
  connection,
  sqlQuery,
  res
) => {
  //---------------------Insert genreName to table genres-------------------------
  let insertGenreQuery = `INSERT INTO genres (genreName) VALUES( ? ) `;
  let getInsertGenreResult = await sqlQuery(connection, insertGenreQuery, [
    genreName,
  ]);
  //---------------------Insert artistName to table artists-------------------------
  let insertArtistQuery = `INSERT INTO artists (artistName) VALUES( ? ) `;
  let getInsertArtistResult = await sqlQuery(connection, insertArtistQuery, [
    artistName,
  ]);

  //-------------------Get the newest genreID to insert genreID to in table belongsTo-----------------------
  let getGenreID = `SELECT genreID FROM genres ORDER BY genreID DESC LIMIT 1`;
  let getGenreIDQueryResult = await sqlQuery(connection, getGenreID);
  let newestGenreID = getGenreIDQueryResult[0].genreID;

  //-------------------Get the newest artistID to insert artistID to in table composeby-----------------------
  let getArtistID = `SELECT artistID FROM artists ORDER BY artistID DESC LIMIT 1`;
  let getArtistIDQueryResult = await sqlQuery(connection, getArtistID);
  let newestArtistID = getArtistIDQueryResult[0].artistID;

  // ------------------------------Insert Song---------------------------
  let postSongInfoQuery = `INSERT INTO songs (songName, uploadDate, duration) VALUES (?, ?, ?)`;
  let postSongResult = await sqlQuery(connection, postSongInfoQuery, [
    songName,
    uploadDate,
    duration,
  ]);
  //------------------------Get the newest songID-----------------------------------
  let getSongsID = `SELECT songID FROM songs ORDER BY songID DESC LIMIT 1`;
  let getSongsIDQueryResult = await sqlQuery(connection, getSongsID);
  let newestSongID = getSongsIDQueryResult[0].songID;

  let postComposeByQuery = `INSERT INTO composeby (artistID, songID) VALUES (${newestArtistID}, ${newestSongID})`;
  let postSongComposeByResult = await sqlQuery(connection, postComposeByQuery);

  let postBelongsToQuery = `INSERT INTO belongsto (genreID, songID) VALUES (${newestGenreID}, ${newestSongID})`;
  let postSongBelongsToResult = await sqlQuery(connection, postBelongsToQuery);
  connection.end();
  return res.status(200).json({
    message: "Insert Successfully!",
  });
};
