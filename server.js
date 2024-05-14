const express = require("express");

const app = express();
const router = express.Router();

router.get("/api", (req, res) => {
  res.send("Blog API");
});

app.use("/", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
