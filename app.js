const express = require("express");
const morgan = require("morgan");

const loaders = require("./loaders");

require("dotenv").config();

const { port } = require("./config");

const app = express();

app.use(morgan("dev"));

loaders(app);

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", { from: req.query.text || "", to: "" });
});

app.use("/history", require("./api/history/history.routes"));

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
