const userModel = require("../models/userModel");

const userDataAccess = {
  async create(user) {
    return await userModel.create(user);
  },
};

module.exports = userDataAccess;
