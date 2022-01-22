const notesOperations = require("../../../models");

const getStats = async (_, res) => {
  const statistics = await notesOperations.getStats();
  res.status(200).json({
    status: "OK",
    data: statistics,
  });
};
module.exports = getStats;
