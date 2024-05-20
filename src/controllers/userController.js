const userService = require("../services/userService");
const logger = require("../utils/logger");
const getUsers = async (req, res) => {
  try {
    const users = await userService.getAll(req);
    res.status(200).json(users);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getByUsername(req);
    res.status(200).json(user);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getById(req);
    res.status(200).json(user);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userService.create(req);
    res.status(201).json(user);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.update(req);
    res.status(201).json(user);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  getUserById,
  createUser,
  updateUser
};
