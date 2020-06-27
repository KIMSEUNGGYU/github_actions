const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  return res.send("Hello github actions 4");
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});

module.exports = app;
