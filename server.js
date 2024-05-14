const express = require("express");
const app = express();
const helmet = require("helmet");
const dotenv = require("dotenv");
const routes = require("./src/routers/index");
const db = require("./src/db/index");
dotenv.config();
app.use(helmet());
app.use(express.json());
app.use(process.env.API_PREFIX + "/user", routes.userRouter);
app.use(process.env.API_PREFIX + "/blog", routes.blogRouter);
db();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
