const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/getUsers", getUsers);
router.get("/getUser", getUser);
router.post("/createUser", createUser);

module.exports = router;
