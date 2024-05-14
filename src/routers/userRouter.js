const express = require("express");
const { getUsers, getUser } = require("../controllers/userController");

const router = express.Router();

router.get("/getUsers", getUsers);
router.get("/getUser/:userId", getUser);

module.exports = router;
