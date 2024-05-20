const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    reqired: true,
  },
  file: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  fav_count: {
    type: Number,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  tag: [
    {
      type: String,
    },
  ],
}, {timestamps: true, versionKey: false});

module.exports = mongoose.model("blog", BlogSchema);
