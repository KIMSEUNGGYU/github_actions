const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  return res.send("Github actions server test 1");
});

app.get("/api/v1/", function (req, res) {
  return res.status(200).json({ message: "api/v1 github actions test 4" });
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});

module.exports = app;
