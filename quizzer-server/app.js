const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const categories = require('./routes/categories')
const rooms = require('./routes/rooms')

const app = express();
const port = 3000;
const dbName = 'quizzer';

app.use(bodyParser.json());
app.use('/categories', categories)
app.use('/rooms', rooms)

app.get("/", (req, res) => {
  res.send("Welcome to quizzer-server");
});

app.listen(port, () => {
  console.log(`quizzer-server listening at http://localhost:${port}`);
  mongoose.connect(`mongodb://localhost:27017/${dbName}`,  {useNewUrlParser: true }, () => {
      console.log(`quizzer db started on port ${port}`);
  });
});