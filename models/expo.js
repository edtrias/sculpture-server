const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expoSchema = new Schema({
  title: String,
  place: String,
  link: String,
  modality: String,
  city: String,
  coutry: String,
  startDate: Date,
  endDate: Date,
  other: String,
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

const Expo = mongoose.model('Expo', expoSchema);
module.exports = Expo;
