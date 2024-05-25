const express = require("express");
const { getBlogs, getBlog, createBlog, updateBlog } = require("../controllers/blogController");

const router = express.Router();

router.get("/getBlogs", getBlogs);
router.get("/getBlog/:blogId", getBlog);
router.post("/createBlog", createBlog);
router.put("/updateBlog", updateBlog);

module.exports = router;
