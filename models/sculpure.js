const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sculptureSchema = new Schema({
  name: String,
  collection: String,
  material: String,
  specs: String
});

const Sculpture = mongoose.model('Sculpture', sculptureSchema);
module.exports = Sculpture;
