const fs = require("fs/promises");
const path = require("path");

const notesPath = path.resolve("myNotes.json");

const getNote = async (id) => {
  const data = await fs.readFile(notesPath);
  const notes = JSON.parse(data);
  const note = notes.find((note) => note.id === id);
  return note;
};

module.exports = getNote;
