const userModel = require("../models/blogModel");

const blogDataAccess = {
  async create(blog) {
    return await userModel.create(blog);
  },
  async update(blog) {
    return await blog.save();
  },
  async getAll() {
    return await userModel.find();
  },
  async getById(id) {
    return await userModel.findById(id)
  },
};

module.exports = blogDataAccess;
