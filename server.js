const express = require("express");
const app = express();
const helmet = require("helmet");
const dotenv = require("dotenv");
const routes = require("./src/routers/index");

dotenv.config();
app.use(helmet());
app.use(process.env.API_PREFIX + "/user", routes.userRouter);
app.use(process.env.API_PREFIX + "/blog", routes.blogRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
