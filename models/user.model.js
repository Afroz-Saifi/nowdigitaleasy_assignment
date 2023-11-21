const mongoose = require("mongoose");
// (name,role,email,phoneNumber)

const user_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "User",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("user", user_schema);

module.exports = { User };
