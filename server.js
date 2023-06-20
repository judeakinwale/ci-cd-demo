const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = server;
