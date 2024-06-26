const express = require("express");
const {
  getUsers,
  getUser,
  getUserById,
  createUser,
  updateUser,
  signIn,
  getBlogs
} = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authToken");

const router = express.Router();

router.get("/getUsers",[verifyToken], getUsers);
router.get("/getUser", getUser);
router.get("/getUserById/:id", getUserById);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.post("/signIn", signIn);
router.post("/getBlogd/:userId", getBlogs);


module.exports = router;
