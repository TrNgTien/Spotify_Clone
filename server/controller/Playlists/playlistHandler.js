const {postPlaylist, getPlaylist, deleteSong} = require("./playlistQueries");
  function postHandler(err, results, res) {
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
  function getHandler(err, res) {
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
  function deleteHandler(err, res) {
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
  
  module.exports = {
    getPlaylists: (req, res) => {
      getPlaylist((err, results) => getHandler(err, results, res));
    },
    postPlaylists: (req, res) => {
      const body = req.body;
      console.log("req body", body);
      postPlaylist(body, (err, results) => postHandler(err, res));
    },
    deleteSongs: (req, res) => {
        deleteSong((err, results) => deleteHandler(err, results, res));
    }
  };