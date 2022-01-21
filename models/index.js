const getAll = require("./getAll.js");
const getNote = require("./getNote");
const createNote = require("./createNote");
const updateNote = require("./updateNote");
const remooveNote = require("./remooveNote");
const req = require("express/lib/request");
const getStats = require("./getStats");

module.exports = {
  getAll,
  getNote,
  createNote,
  updateNote,
  remooveNote,
  getStats,
};
