const userModel = require("../models/userModel");
const utils = require("../utils/utils");
const userDataAccess = require("../data access/userDataAccess");
const dtos = require("../dto/index");
const {createToken} = require("../middlewares/authToken")

const userService = {
  async create(req) {
    const { username, email, password, fullName, age } = req.body;
    const user = await new userModel({
      username,
      email,
      password: await utils.helper.hashPassword(password),
      fullName,
      age,
      avatar: "",
      blogs: [],
    });
    return await userDataAccess.create(user);
  },
  async update(req) {
    const { id } = req.params;
    const { username, email, fullName, age } = req.body;
    const user = await userModel.findById(id);
    user.username = username,
    user.email = email,
    user.fullName = fullName,
    user.age = age
    return await userDataAccess.update(user);
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
    dtos.baseResponse.data = await userDataAccess.getById(id);
    dtos.baseResponse.message = "success";
    return dtos.baseResponse; 
  },
  async signIn(req) {
    const {email, password} = req.body;
    const user = await userDataAccess.getByUsername({email});
    if (!user) throw new APIError("No user found with matching email",401)
    const passwordCompare = await utils.helper.comparePassword(password,user.password)
    if(!passwordCompare) throw new APIError("The password is incorrect",401)
    const token = await createToken({user});
    dtos.baseResponse.data = user;
    dtos.baseResponse.token = token;
    dtos.baseResponse.message = "success";
    return dtos.baseResponse;
  },
  async getBlogs(req){
    const { userId } = req.params;
    return await userDataAccess.getBlogs({_id: userId});
  }
};

module.exports = userService;
