const express = require("express");
const createError = require("http-errors");
const notesOperations = require("../models");
const router = express.Router();

router.get("/", async (_, res, next) => {
  try {
    const statistics = await notesOperations.getStats();
    res.status(200).json({
      status: "OK",
      data: statistics,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
