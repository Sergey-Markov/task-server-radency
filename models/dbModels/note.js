const { Schema, model } = require("mongoose");

const noteSchema = Schema(
  {
    name: {
      type: String,
      default: "unnamed",
    },
    date: String,
    category: {
      type: String,
      unum: ["Random Tought", "Task", "Idea"],
      default: "Task",
    },
    content: String,
    allDatesFromText: String,
    archived: Boolean,
  },
  { versionKey: false, timestamps: true }
);

const Note = model("note", noteSchema);

module.exports = Note;
