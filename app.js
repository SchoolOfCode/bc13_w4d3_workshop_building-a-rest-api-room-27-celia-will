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

app.get("/api/quotes", async function (req, res) {
  const arrayQuotes = await getQuotes();
  res.send(arrayQuotes);
});

app.get("/api/quotes?type=random", function (req, res) {
  // use getRandomQuote
  // save in variable
   req.query
  // if (randomQuery === 'random'){
    res.json(req.query)
  
  // const randomQuoteObject = getRandomQuote();
  // console.log(randomQuoteObject);
  // console.log(getRandomQuote())
  // res.json(randomQuoteObject);
});

// get route handler
// use getQuotes


app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
