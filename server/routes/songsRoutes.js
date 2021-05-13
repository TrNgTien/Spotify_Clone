const express = require("express");
const router = express.Router();
const songHandler = require("../controller/Songs/songHandler");

// router.use('/songs', songHandler.show)
// router.use("/", songHandler.index)
router.post("/postSongs", songHandler.postSongs);
router.get("/getAllSongs", songHandler.getSongs);

module.exports = router;