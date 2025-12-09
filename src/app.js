const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo DevOps CI/CD!");
});

module.exports = app;