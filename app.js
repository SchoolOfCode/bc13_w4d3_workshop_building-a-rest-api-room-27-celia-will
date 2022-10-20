const express = require("express");
const app = express();
const router = require("../router/quote.js");
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

app.use(router('api/quotes'));

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
