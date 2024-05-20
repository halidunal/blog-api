const userModel = require("../models/userModel");
const utils = require("../utils/utils");
const userDataAccess = require("../data access/userDataAccess");
const dtos = require("../dto/index");
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
    dtos.baseResponse.data = await userDataAccess.getById({ id });
    dtos.baseResponse.message = "success";
    return dtos.baseResponse; 
  },
};

module.exports = userService;
