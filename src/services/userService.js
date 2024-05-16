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
  async getById(req) {
    const { email } = req.body;
    return await userDataAccess.getById({ email });
  },
};

module.exports = userService;
