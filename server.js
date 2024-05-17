const express = require("express");
const app = express();
const helmet = require("helmet");
const dotenv = require("dotenv");
const routes = require("./src/routers/index");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./src/config/swagger.json");
const path = require("path");

const db = require("./src/db/index");

dotenv.config();
app.use(helmet());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads/images", express.static(__dirname));

app.use(process.env.APP_API_PREFIX + "user", routes.userRouter);
app.use(process.env.APP_API_PREFIX + "blog", routes.blogRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

db();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
