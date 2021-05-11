const {
  postPlaylists,
  getPlaylists,
  deleteSongs,
} = require("./playlistQueries");

function getHandler(err, results, res) {
  if (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  } else {
    return res.status(200).json({
      message: "Connection Successfully!",
      playlists: { listSongs: results },
    });
  }
}
function postHandler(err, res) {
  if (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  } else {
    return res.status(200).json({
      message: "Successfully!",
    });
  }
}

function deleteHandler(err, res) {
  if (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  } else {
    return res.status(200).json({
      message: "Deleted Successfully!",
    });
  }
}
module.exports = {
  getPlaylists: (req, res) => {
    getPlaylists(null, (err, res) => getHandler(err, results, res));
  },
  postPlaylists: (req, res) => {
    const body = req.body;
    postPlaylists(body, (err, res) => postHandler(err, res));
  },
  deleteSongs: (req, res) => {
    const body = req.body;
    deleteSongs(body, (err, res) => deleteHandler(err, res));
  },
};
