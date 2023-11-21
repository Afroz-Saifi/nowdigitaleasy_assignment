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

// get user by the id
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if(user){
            return res.status(200).json({
                success: true,
                user
            })
        }
        const error = new Error("user not found with the id")
        return next(error)
    } catch (error) {
        next(error)
    }
}

// delete a user by its id
const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.status(202).json({
            success: true,
            message: "user deleted successfully",
            user
        })
    } catch (error) {
        next(error)
    }
}

// update a user details by its id
const updateUser = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body)
        return res.status(202).json({
            success: true,
            message: "user details are updated successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { addNewUser, getAllUsers, getUser, deleteUser, updateUser };
