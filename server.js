const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/kraszani', {
  useMongoClient: true
});

app.get('/', (req, res) => {
  res.send('hola')
});

app.listen(27017, () => {
  console.log('Listening on port 27017')
});
