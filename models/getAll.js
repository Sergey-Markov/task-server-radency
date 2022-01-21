const fs = require("fs/promises");
const path = require("path");

const notesPath = path.resolve("myNotes.json");

const getAll = async () => {
  const data = await fs.readFile(notesPath);

  const notes = JSON.parse(data);
  return notes;
};

module.exports = getAll;
