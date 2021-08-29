const db = require("./db");
const ejs = require("./ejs");

module.exports = (app) => {
  db();
  ejs(app);
};
