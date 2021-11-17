const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  movieNum: {
    type: Number,
  },
  date: {
    type: String,
  },
});

module.exports = Vote = mongoose.model("votes", voteSchema);
