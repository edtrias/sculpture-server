const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  title: String,
  source: String,
  link: String,
  image: String,
})

const Media = mongoose.model('Media', mediaSchema);
module.exports = Media;
