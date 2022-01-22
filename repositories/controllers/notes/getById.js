const notesOperations = require("../../../models/");
const createError = require("http-errors");

const getById = async (req, res) => {
  const { id } = req.params;
  const note = await notesOperations.getNote(id);
  if (!note) {
    throw new createError(404, `Note whith id:${id} - Not found`);
  }
  res.status(200).json({
    status: "succes",
    code: 200,
    data: {
      note,
    },
  });
};

module.exports = getById;
