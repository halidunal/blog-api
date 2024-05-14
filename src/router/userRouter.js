const express = require("express");

const router = express.Router();

router.get("/getUsers", (req, res) => {});
router.get("/getUser/:userId", (req, res) => {});

module.exports = router;
