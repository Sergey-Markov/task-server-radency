const fs = require("fs/promises");
const path = require("path");
const createError = require("http-errors");
const getAll = require("./getAll");
const datesFromText = require("../services/datesFromText");

const notesPath = path.resolve("myNotes.json");

const updateNote = async (id, body) => {
  const notes = await getAll();
  const content = body.content;

  const noteIndex = notes.findIndex((note) => {
    if (note.id === String(id)) return note;
  });
  if (noteIndex === -1) {
    throw new createError(404, `Note whith id:${id} - not found`);
  }
  if (body.content) {
    const newDates = {
      allDatesFromText: datesFromText(content),
    };
    const prevNote = { ...notes[noteIndex] };
    notes[noteIndex] = { ...prevNote, ...body, ...newDates };
    const dataToJSON = JSON.stringify(notes);
    await fs.writeFile(notesPath, dataToJSON);
    return notes[noteIndex];
  }

  const prevNote = { ...notes[noteIndex] };
  notes[noteIndex] = { ...prevNote, ...body };

  const dataToJSON = JSON.stringify(notes);
  await fs.writeFile(notesPath, dataToJSON);
  return notes[noteIndex];
};

module.exports = updateNote;
