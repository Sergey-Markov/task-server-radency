const notesOperations = require("../../../models/");

const getAll = async (_, res) => {
  const notes = await notesOperations.getAll();
  res.status(200).json({
    status: "OK",
    data: notes,
  });
};
module.exports = getAll;
