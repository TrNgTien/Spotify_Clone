const express = require("express");
const router = express.Router();
const SongHandler = require("../controller/Songs/SongHandler");
const ArtistHandler = require("../controller/Songs/ArtistHandler");
const GenreHandler = require("../controller/Songs/GenreHandler");

router.post("/postSongs", SongHandler.postSongs);
router.get("/getAllSongs", SongHandler.getSongs);
router.get("/getAllArtists", ArtistHandler.getArtists);
router.get("/getAllGenres", GenreHandler.getGenres);

module.exports = router;
