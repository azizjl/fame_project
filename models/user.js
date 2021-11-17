const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
  photo: {
    type: String,
    default: "",
  },
});

module.exports = User = mongoose.model("users", userSchema);
