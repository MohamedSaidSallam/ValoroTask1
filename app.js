const express = require("express");

require("dotenv").config();

const PORT = process.env.PORT

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
