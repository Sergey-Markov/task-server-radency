const fs = require("fs/promises");
const path = require("path");
const createError = require("http-errors");

const getAll = require("./getAll");

const notesPath = path.resolve("myNotes.json");

const remooveNote = async (id) => {
  const notes = await getAll();
  const note = notes.find((note) => {
    if (note.id === String(id)) {
      return note;
    } else {
      throw new createError(404, `Note whith id:${id} - not found`);
    }
  });
  const indexOfNote = notes.indexOf(note);
  notes.splice(indexOfNote, 1);
  await fs.writeFile(notesPath, JSON.stringify(notes));
  return note;
};

module.exports = remooveNote;
