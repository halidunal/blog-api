const userModel = require("../models/userModel");

const userDataAccess = {
  async create(user) {
    return await userModel.create(user);
  },
  async getAll() {
    return await userModel.find();
  },
  async getById(email) {
    return await userModel.findOne(email);
  },
};

module.exports = userDataAccess;
