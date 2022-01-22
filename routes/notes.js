const express = require("express");
const router = express.Router();
const { validation, ctrlWrapper } = require("../middlewares");
const schems = require("../services/validationSchems");
const {
  notes: ctrl,
  stats: ctrlStats,
} = require("../repositories/controllers");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.patch(
  "/:id",
  validation(schems.joiSchemaForPatch),
  ctrlWrapper(ctrl.updateById)
);

router.post(
  "/",
  validation(schems.joiSchemaForPost),
  ctrlWrapper(ctrl.addNote)
);

router.delete("/:id", ctrlWrapper(ctrl.deleteById));

router.get("/stats", ctrlWrapper(ctrlStats.getStats));

module.exports = router;
