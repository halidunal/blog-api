const mongoose = require("mongoose");

const connectMongoose = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("mongodb connected");
      });
  } catch (error) {
    console.log("mongodb connection failed", error);
  }
};

module.exports = connectMongoose;
