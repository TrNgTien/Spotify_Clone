const express = require("express");
const router = express.Router();
const userHandler = require("../controller/Users/userHandler");

router.post("/register", userHandler.register);
router.post("/login", userHandler.login);
router.get("/getUser", userHandler.getUsers);

module.exports = router;
