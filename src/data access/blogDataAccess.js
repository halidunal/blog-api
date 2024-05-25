const blogModel = require("../models/blogModel");

const blogDataAccess = {
  async create(blog) {
    return await userModel.create(blog);
  },
  async update(blog) {
    return await blog.save();
  },
  async getAll() {
    return await blogModel.find();
  },
  async getById(id) {
    return await blogModel.findById(id)
  },
  async updateFavCount(blog){
    return await blog.save();
  }
};

module.exports = blogDataAccess;
