const express = require("express");
const {
  getUsers,
  getUser,
  getUserById,
  createUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/getUsers", getUsers);
router.get("/getUser", getUser);
router.get("/getUserById/:id", getUserById);
router.post("/createUser", createUser);

module.exports = router;
