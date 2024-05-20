const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    reqired: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    reqired: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
  },
  blogs: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Blog",
    },
  ],
});

module.exports = mongoose.model("user", UserSchema);
