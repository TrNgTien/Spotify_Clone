const express = require("express");
const router = express.Router();
const songHandler = require("../controller/Songs/songHandler");
const ArtistHandler = require("../controller/Songs/ArtistHandler");
const GenreHandler = require("../controller/Songs/GenreHandler");

router.post("/postSongs", songHandler.postSongs);
router.get("/getAllSongs", songHandler.getSongs);
router.get("/getAllArtists", ArtistHandler.getArtists);
router.get("/getAllGenres", GenreHandler.getGenres);

module.exports = router;
