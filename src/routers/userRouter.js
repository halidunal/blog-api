const express = require("express");
const {
  getUsers,
  getUser,
  getUserById,
  createUser,
  updateUser
} = require("../controllers/userController");

const router = express.Router();

router.get("/getUsers", getUsers);
router.get("/getUser", getUser);
router.get("/getUserById/:id", getUserById);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;
