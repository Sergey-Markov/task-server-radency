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

/* Мои маршруты
+ 1.Получить весь файл заметок(Get all notes) - GET /notes 
+ 2.Создать заметку(Create a note object) - POST /notes 
+ 3.Удалить заметку(Remove item)  DELETE /notes/:id
+ 4.Изменить заметку(Edit item) - PATCH /notes/:id

+ 5. получить элемент(Retrieve item)- GET /notes/:id
 6. Статистика наличия активных и арх заметок(нужно высчитать) = GET /notes/stats













*/
