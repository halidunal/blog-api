const blogService = require("../services/blogService");
const logger = require("../utils/logger");

const getBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAll(req);
    res.status(200).json(blogs);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await blogService.getById(req);
    res.status(200).json(blog);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const createBlog = async (req,res) => {
  try {
    const blog = await blogService.create(req);
    res.status(201).json(blog);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
}

const updateBlog = async (req, res) => {
  try {
    const blog = await blogService.update(req);
    res.status(201).json(blog);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog
};
