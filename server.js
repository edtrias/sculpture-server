const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/users');
const expos = require('./routes/expos');
const families = require('./routes/families');
const artworks = require('./routes/artworks');
const medias = require('./routes/medias');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/kraszani', {
  useMongoClient: true
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', users);
app.use('/api', expos);
app.use('/api', families);
app.use('/api', artworks);
app.use('/api', medias);

app.get('/', (req, res) => {
  res.send('MonteCat')
});

app.listen(27017, () => {
  console.log('Listening on port 27017')
});
