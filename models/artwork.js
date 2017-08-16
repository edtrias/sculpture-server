const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
  name: String,
  family: String,
  material: String,
  image: String,
  specs: String
});

const Artwork = mongoose.model('Artwork', artworkSchema);
module.exports = Artwork;
