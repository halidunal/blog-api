const express = require("express");
const { getBlogs, getBlog } = require("../controllers/blogController");

const router = express.Router();

router.get("/getBlogs", getBlogs);
router.get("/getBlog/:blogId", getBlog);

module.exports = router;
