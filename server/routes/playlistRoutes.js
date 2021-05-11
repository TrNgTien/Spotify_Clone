const express = require("express");
const router = express.Router();
const playlistHandler = require("../controller/Playlists/playlistHandler");

router.post("/postPlaylists", playlistHandler.postPlaylists);
router.get("/getPlaylists", playlistHandler.getPlaylists);  
router.delete("/deleteSongs", playlistHandler.deleteSongs);

module.exports = router;
