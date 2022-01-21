const express = require("express");
const createError = require("http-errors");
const notesOperations = require("../models");
const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const notes = await notesOperations.getAll();
    res.status(200).json({
      status: "OK",
      data: notes,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await notesOperations.getNote(id);
    if (!note) {
      throw new createError(404, `Note whith id:${id} - Not found`);
    }
    res.status(200).json({
      status: "succes",
      code: 200,
      data: {
        note,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (
      body.name ||
      body.date ||
      body.category ||
      body.id ||
      body.allDatesFromText
    ) {
      throw new createError(
        400,
        `The note with the specified parameters cannot be changed, do not transfer the following parameters in the query body: name, date, category, id`
      );
    }
    const note = await notesOperations.updateNote(id, body);
    res.status(201).json({
      status: "succes",
      code: 201,
      data: note,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, category, content } = req.body;
    const note = await notesOperations.createNote(name, category, content);
    res.status(201).json({
      status: "succes",
      code: 201,
      data: note,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await notesOperations.remooveNote(id);
    res.status(201).json({
      status: "succes",
      code: 201,
      data: note,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/stats", async (_, res, next) => {
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

/* Мои маршруты
+ 1.Получить весь файл заметок(Get all notes) - GET /notes 
+ 2.Создать заметку(Create a note object) - POST /notes 
+ 3.Удалить заметку(Remove item)  DELETE /notes/:id
+ 4.Изменить заметку(Edit item) - PATCH /notes/:id

+ 5. получить элемент(Retrieve item)- GET /notes/:id
 6. Статистика наличия активных и арх заметок(нужно высчитать) = GET /notes/stats













*/
