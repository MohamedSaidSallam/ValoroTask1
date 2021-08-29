const express = require("express");

module.exports = (app) => {
  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });
};
