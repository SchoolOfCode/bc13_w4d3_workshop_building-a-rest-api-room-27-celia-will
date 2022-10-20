const express = require("express");
const router = express();

const {
    getQuotes,
    addQuote,
    getRandomQuote,
    editQuote,
    deleteQuote,
  } = require("../models/quote.js");

router.get("/", function (req, res) {
    res.send("Welcome to cwissy.rest");
  });
  
  
router.get("/api/quotes", async function (req, res) {
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
  
  router.post("/api/quotes", async function (req, res){
    const newQuote = await addQuote(req.body.quoteText);
    res.json(newQuote);
  }
  )
  

  router.patch("/api/quotes/:id", async function (req, res){
    const editId = req.params.id;
    console.log(req.params.id);
    const newQuoteText = req.body.quoteText;
    console.log(newQuoteText);
    const editedQuote = await editQuote(editId, newQuoteText);
    res.json(editedQuote);
  } 
  )
  
  router.delete("/api/quotes/:id", (req, res) => {
    deleteQuote(req.params.id);
    res.send(`Quote ${req.params.id} has been deleted`);
  }
  )
  
  module.exports = {router};