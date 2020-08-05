const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  return res.send("Hello github actions 10");
  //return res.status(200).json(({message: "Hello github actions 10"}));
});

app.get("/api/v1/", function (req, res) {
  return res.status(200).json({ message: "api/v1 merged test 5" });
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});

module.exports = app;
