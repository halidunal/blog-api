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
    return await userModel.findOne(email);
  },
  async getById(id) {
    return await userModel.findById(id)
  },
  async getBlogs(userId){
    return await userModel.findOne(userId).populate({
      path: "blogs",
      select: "title desciription"
    })
  }
};

module.exports = userDataAccess;
