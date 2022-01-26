const { Note } = require("../../../models/dbModels");
const createError = require("http-errors");
const datesFromText = require("../../../services/datesFromText");

const updateById = async (req, res) => {
  const { id } = req.params;

  if (
    req.body.name ||
    req.body.date ||
    req.body.category ||
    req.body.id ||
    req.body.allDatesFromText
  ) {
    throw new createError(
      400,
      `The note with the specified parameters cannot be changed, do not transfer the following parameters in the query body: name, date, category, id`
    );
  }
  const { content, archived } = req.body;
  const allDatesFromText = datesFromText(content);
  const newNote = {
    content,
    allDatesFromText,
    archived,
  };
  const updatedNote = await Note.findByIdAndUpdate(id, newNote, { new: true });
  // const updatedNote = await Note.findById(id);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: updatedNote,
  });
};

module.exports = updateById;
