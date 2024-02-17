const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// initializations
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Backend CactusLuz :3");
});

module.exports = app;
