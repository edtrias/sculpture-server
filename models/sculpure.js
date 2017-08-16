const mongoose = require('mongoose');
const multer = require('multer');

const sculptureSchema = new Schema({
  name: String,
  collection: String,
  material: String,
  specs: String
});

const Sculpture = mongoose.model('Sculpture', sculptureSchema);
module.exports = Sculpture;
