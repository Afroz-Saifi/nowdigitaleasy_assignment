const { User } = require("../models/user.model");

// add new user to the database
const addNewUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(201).json({
      success: true,
      message: "New user created successfully",
      user,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

// get all the users details from the database
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        if(users.length===0){
            const error = new Error("No users found in the database")
            return next(error)
        }
        return res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = { addNewUser, getAllUsers };
