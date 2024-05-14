const express = require("express");
const app = express();
const routes = require("./src/router/index");
const API_PREFIX = "/api";

app.use(`${API_PREFIX}/user`, routes.userRouter);
app.use(`${API_PREFIX}/blog`, routes.blogRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
