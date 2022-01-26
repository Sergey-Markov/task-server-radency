const { Note } = require("../../../models/dbModels");
const countStats = require("../../../services/countStats");
const getStats = async (_, res) => {
  const allNotes = await Note.find();
  const statistics = countStats(allNotes);
  res.status(200).json({
    status: "OK",
    data: statistics,
  });
};
module.exports = getStats;
