const express = require("express");
const app = express();
const router = require("./router/quotes.js");
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

app.use('api/quotes', router);

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
