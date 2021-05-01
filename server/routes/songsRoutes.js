const express = require("express");
const router = express.Router();
const songHandler = require("../controller/Songs/songHandler");

router.get("/getAllSongs", songHandler.getAllSongs);

module.exports = router;
