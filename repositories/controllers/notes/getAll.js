const notesOperations = require("../../../models/");

const getAll = async (_, res, next) => {
  try {
    const notes = await notesOperations.getAll();
    res.status(200).json({
      status: "OK",
      data: notes,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getAll;
