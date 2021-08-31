const History = require("../../models/history");
const Exception = require("../../utils/Exception");

const getFullHistory = async (req, res, next) => {
  try {
    const history = await History.find();
    res.json(history);
  } catch (e) {
    next(new Exception(400, e.message));
  }
};

const appendToHistory = async (req, res, next) => {
  const historyData = req.body;

  try {
    const newEntry = await new History(historyData);
    await newEntry.save();

    res.status(201).json({
      status: "Success",
      message: "History created successfully",
      newEntry,
    });
  } catch (e) {
    next(new Exception(400, e.message));
  }
};
const deleteHistory = async (req, res, next) => {
  try {
    await History.remove();
    res.json({
      status: "Success",
      message: "History deleted successfully",
    });
  } catch (e) {
    next(new Exception(400, e.message));
  }
};
const deleteHistoryEntry = async (req, res, next) => {
  const entryID = req.params.id;
  try {
    await History.findByIdAndRemove(entryID);
    res.json({
      status: "Success",
      message: `History (id: ${entryID}) deleted successfully`,
    });
  } catch (e) {
    next(new Exception(400, e.message));
  }
};

module.exports = {
  getFullHistory,
  appendToHistory,
  deleteHistory,
  deleteHistoryEntry,
};
