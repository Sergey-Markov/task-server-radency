const notesOperations = require("../../../models/");

const deleteById = async (req, res) => {
  const { id } = req.params;
  const note = await notesOperations.remooveNote(id);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: note,
  });
};
module.exports = deleteById;
