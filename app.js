const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const foods = require("./api/foods");
const scan = require("./api/scan");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Can I Eat That API -Capstone"
  });
});

app.use("/api/foods", foods);
app.use("/api/scan", scan);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  res.status(404).send({ message: "URL not found: " + req.originalUrl })
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: req.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports = app;
