const express = require("express");
const app = express();
const port = 3000;

const {
  getQuotes,
  addQuote,
  getRandomQuote,
  editQuote,
  deleteQuote,
} = require("./quote.js");

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to cwissy.rest");
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
