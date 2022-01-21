const fs = require("fs/promises");
const path = require("path");
const getAll = require("./getAll");
const datesFromText = require("../services/datesFromText");
const getNote = require("./getNote");

const notesPath = path.resolve("myNotes.json");

const updateNote = async (id, body) => {
  console.log(id, body);
  const notes = await getAll();
  const content = body.content;

  const noteIndex = notes.findIndex((note) => {
    if (note.id === String(id)) return note;
  });
  if (noteIndex === -1) {
    return null;
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
