const { Note } = require("../../../models/dbModels");
const datesFromText = require("../../../services/datesFromText");
const createNewDate = require("../../../services/createNewDate");

const addNote = async (req, res) => {
  const { name = "unnamed", category = "Task", content = "" } = req.body;

  const date = createNewDate();
  const allDatesFromText = datesFromText(content);

  const note = await Note.create({
    name,
    category,
    content,
    date,
    allDatesFromText,
    archived: false,
  });
  res.status(201).json({
    status: "succes",
    code: 201,
    data: note,
  });
};
module.exports = addNote;
