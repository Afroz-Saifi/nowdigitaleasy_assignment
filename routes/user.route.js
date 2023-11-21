const express = require("express");
const { addNewUser, getAllUsers, getUser } = require("../controller/user.controller");
const user_router = express.Router();

// route to add new user
user_router.post("/add", addNewUser);

// route to get details of all the users
user_router.get("/all_users", getAllUsers)

// route to get user by the id
user_router.get("/user/:id", getUser)

module.exports = { user_router };
