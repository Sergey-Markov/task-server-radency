const fs = require("fs/promises");
const path = require("path");

const notesPath = path.resolve("myNotes.json");
console.log(notesPath);

const getNote = async (id) => {
  const data = await fs.readFile(notesPath);
  const notes = JSON.parse(data);
  const note = notes.find((note) => note.id === id);
  console.log(note);
  return note;
};

module.exports = getNote;
