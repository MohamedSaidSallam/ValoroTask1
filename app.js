const express = require("express");
const morgan = require("morgan");

require("dotenv").config();

const { port } = require("./config");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
