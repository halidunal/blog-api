const userModel = require("../models/userModel");
const utils = require("../utils/utils");
const userDataAccess = require("../data access/userDataAccess");
const userService = {
  async create(req) {
    const { username, email, password, fullName, age } = req.body;

    const user = await new userModel({
      username,
      email,
      password: utils.helper.hashString(password),
      fullName,
      age,
      avatar: "",
      blogs: [],
    });
    return await userDataAccess.create(user);
  },
  async getAll() {
    return await userDataAccess.getAll();
  },
  async getByUsername(req) {
    const { email } = req.body;
    return await userDataAccess.getByUsername({ email });
  },
  async getById(req) {
    const { id } = req.params;
    return await userDataAccess.getById({ id });
  },
};

module.exports = userService;
