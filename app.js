const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const routes = require("./routes");

const app = express();

app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/notes/stats", routes.statisticsRouter);
app.use("/notes", routes.notesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({
    status: "ERROR",
    code: 404,
    message: "Not found",
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
