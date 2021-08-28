const express = require("express");

const historyController = require("./history.controller");

const router = express.Router();

router.get("/", historyController.getFullHistory);
router.post("/", historyController.appendToHistory);
router.delete("/", historyController.deleteHistory);
router.delete("/:id", historyController.deleteHistoryEntry);

module.exports = router;
