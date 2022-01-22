const notesOperations = require("../../../models/");
const createError = require("http-errors");

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
  const note = await notesOperations.updateNote(id, req.body);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: note,
  });
};

module.exports = updateById;
