const { User } = require("../models/user.model");

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

module.exports = { addNewUser };
