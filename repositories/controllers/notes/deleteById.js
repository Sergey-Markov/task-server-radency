const { Note } = require("../../../models/dbModels");

const deleteById = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findByIdAndDelete(id);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: note,
  });
};
module.exports = deleteById;
