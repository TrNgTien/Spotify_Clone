const express = require("express");
const router = express.Router();
const userHandler = require("../controller/Users/userHandler");

router.post("/register", userHandler.createUser);
router.post("/login", userHandler.login);
router.get("/getAllUser", userHandler.getUsers);


module.exports = router;