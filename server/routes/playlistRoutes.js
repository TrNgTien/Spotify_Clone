const express = require("express");
const router = express.Router();
const playlistHandler = require("../controller/Playlists/playlistHandler");

router.post("/postPlaylists", playlistHandler.postPlaylist);
router.get("/getPlaylists", playlistHandler.getPlaylist); 
router.delete("/deleteSongs", playlistHandler.deleteSong);

module.exports = router;
