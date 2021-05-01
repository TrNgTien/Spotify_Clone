const express = require('express');
const router = express.Router();
const getAPI = require('../Songs/get');
const pushAPI = require('../Songs/push');

router.get('/getAllSongs', getAPI.getAllSongs);

module.exports = router;