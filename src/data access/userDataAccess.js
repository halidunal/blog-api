const userModel = require("../models/userModel");

const userDataAccess = {
  async create(user) {
    return await userModel.create(user);
  },
  async getAll() {
    return await userModel.find();
  },
  async getByUsername(email) {
    return await userModel.find(email);
  },
  async getById(id) {
    return await userModel.find(id);
  },
};

module.exports = userDataAccess;
