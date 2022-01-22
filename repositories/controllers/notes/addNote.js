const notesOperations = require("../../../models/");

const addNote = async (req, res) => {
  const { name, category, content } = req.body;
  const note = await notesOperations.createNote(name, category, content);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: note,
  });
};
module.exports = addNote;
