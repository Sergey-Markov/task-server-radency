const { Note } = require("../../../models/dbModels");

const deleteAll = async (req, res) => {
  const note = await Note.deleteMany();
  res.status(200).json({
    status: "succes",
    code: 200,
    data: note,
  });
  console.log();
};
module.exports = deleteAll;
