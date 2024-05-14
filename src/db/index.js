const connectMongoose = require("./mongoose");

const db = () => {
  try {
    connectMongoose();
  } catch (error) {
    console.log("db connection error");
  }
};

module.exports = db;
