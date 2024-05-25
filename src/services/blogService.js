const blogModel = require("../models/blogModel");
const blogDataAccess = require("../data access/blogDataAccess");
const userDataAccess = require("../data access/userDataAccess");
const dtos = require("../dto/index");

const userService = {
  async create(req) {
    const { userId, title, description, file, tags } = req.body;
    const blog = await new blogModel({
        userId,
        title,
        description,
        file,
        favCount: 0,
        tags
    });
    const result = await blogDataAccess.create(blog);
    if(result){
        let user = await userDataAccess.getById(userId)
        user.blogs.push(blog);
        await user.save();
    }
    return result;
  },
  async update(req) {
    const { id } = req.params;
    const { title, description, tags, file } = req.body;
    const blog = await blogModel.findById(id);
    blog.title = title,
    blog.description = description,
    blog.tags = tags,
    blog.file = file
    return await blogDataAccess.update(blog);
  },
  async getAll() {
    return await blogDataAccess.getAll();
  },
  async getById(req) {
    const { id } = req.params;
    dtos.baseResponse.data = await blogDataAccess.getById(id);
    dtos.baseResponse.message = "success";
    return dtos.baseResponse; 
  },
};

module.exports = userService;
