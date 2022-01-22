const express = require("express");
const router = express.Router();
const { validation } = require("../middlewares");
const schems = require("../services/validationSchems");
const {
  notes: ctrl,
  stats: ctrlStats,
} = require("../repositories/controllers");

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.patch("/:id", validation(schems.joiSchemaForPatch), ctrl.updateById);

router.post("/", validation(schems.joiSchemaForPost), ctrl.addNote);

router.delete("/:id", ctrl.deleteById);

router.get("/stats", ctrlStats.getStats);

module.exports = router;
