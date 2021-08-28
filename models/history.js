const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema(
  {
    languageFrom: {
      type: String,
      lowercase: true,
    },
    languageTo: {
      type: String,
      lowercase: true,
    },
    textFrom: {
      type: String,
      required: true,
    },
    textTo: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", HistorySchema);
