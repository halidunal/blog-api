const userModel = require("../models/userModel");

const userDataAccess = {
  async create(user) {
    return await userModel.create(user);
  },
  async update(user) {
    return await user.save();
  },
  async getAll() {
    return await userModel.find();
  },
  async getByUsername(email) {
    return await userModel.find(email);
  },
  async getById(id) {
    return await userModel.findById(id)
  },
};

module.exports = userDataAccess;
