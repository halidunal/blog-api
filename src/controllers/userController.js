const userService = require("../services/userService");
const getUsers = (req, res) => {};

const getUser = (req, res) => {};

const createUser = async (req, res) => {
  try {
    const user = await userService.create(req);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
