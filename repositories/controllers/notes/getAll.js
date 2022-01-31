const { Note } = require("../../../models/dbModels");

const getAll = async (_, res) => {
  const notes = await Note.find();
  res.status(200).json({
    status: "OK",
    notes,
  });
};
module.exports = getAll;
