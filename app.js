const express = require("express");
const morgan = require("morgan");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
