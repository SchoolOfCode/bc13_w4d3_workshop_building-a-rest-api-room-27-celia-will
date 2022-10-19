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
  //call all the quotes
  const arrayQuotes = await getQuotes();
  //call random quote
  let randomQuote = await getRandomQuote()
  // save query object
  let queryType = req.query.type
  //  check if query type matches random
  if (queryType == 'random'){
    // respond with randomQuote
    res.json(randomQuote);
    // if not respond with all the quotes
  } else {
    res.send(arrayQuotes);
  }
});

//create post request handler to api/quotes
// use addQuote using body of request as parameter
//req.body.quoteText
// respond with new quote object

app.post("/api/quotes", async function (req, res){
  const newQuoteText = req.body.quoteText
  console.log(newQuoteText);
  const newQuote = await addQuote(newQuoteText);
  res.json(newQuote);
}
)

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
