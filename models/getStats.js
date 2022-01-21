const fs = require("fs/promises");
const path = require("path");
const getAll = require("./getAll");
const countStats = require("../services/countStats");

const notesPath = path.resolve("myNotes.json");

const getStats = async () => {
  const notes = await getAll();
  const statistics = countStats(notes);
  return statistics;
};

module.exports = getStats;
