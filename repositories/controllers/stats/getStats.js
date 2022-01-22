const notesOperations = require("../../../models");

const getStats = async (_, res, next) => {
  try {
    const statistics = await notesOperations.getStats();
    res.status(200).json({
      status: "OK",
      data: statistics,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getStats;
