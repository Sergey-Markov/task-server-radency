const { Schema, model } = require("mongoose");

const noteSchema = Schema({
  name: String,
  date: String,
  category: String,
  content: String,
  allDatesFromText: String,
  archived: Boolean,
});

const Note = model("note", noteSchema);

module.exports = Note;
