const express = require("express");
const { addNewUser } = require("../controller/user.controller");
const user_router = express.Router();

user_router.post("/add", addNewUser);

module.exports = { user_router };
