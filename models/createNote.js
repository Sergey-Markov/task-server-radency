const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const getAll = require("./getAll");
const datesFromText = require("../services/datesFromText");
const createNewDate = require("../services/createNewDate");

const notesPath = path.resolve("myNotes.json");

const createNote = async (
  name = "unnamed",
  category = "Task",
  content = ""
) => {
  const newNote = {
    id: crypto.randomUUID(),
    name,
    date: createNewDate(),
    category,
    content,
    allDatesFromText: datesFromText(content),
    archived: false,
  };

  const notes = await getAll();
  notes.push(newNote);
  const dataToJSON = JSON.stringify(notes);
  await fs.writeFile(notesPath, dataToJSON);
  return newNote;
};

module.exports = createNote;
