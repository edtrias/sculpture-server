const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  title: String,
  source: String,
  link: String,
  image: {
    fieldname: String,
    originalname: String,
    encoding: String,
    mimeptype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number,
    created_at: Date,
    updated_at: Date
  }
})

const Media = mongoose.model('Media', mediaSchema);
module.exports = Media;
