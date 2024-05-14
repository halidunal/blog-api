const express = require("express");

const router = express.Router();

router.get("/getBlogs", (req, res) => {});
router.get("/getBlog/:blogId", (req, res) => {});

module.exports = router;
