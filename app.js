const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const routes = require("./routes");

const app = express();

app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/notes", routes.notesRouter);

app.use(function (req, res, next) {
  res.status(404).json({
    status: "ERROR",
    code: 404,
    message: "Not found",
  });
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
