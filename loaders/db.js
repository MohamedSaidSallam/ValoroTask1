const mongoose = require("mongoose");

const { mongodb } = require("../config");

module.exports = () => {
  mongoose
    .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to Mongo"))
    .catch((err) => console.error(err));
};
