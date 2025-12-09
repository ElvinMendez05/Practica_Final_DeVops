const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo DevOps CI/CD!");
});

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));

module.exports = app;