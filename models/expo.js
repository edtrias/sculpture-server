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
  picture: String,
  Other: String
})

const Expo = mongoose.model('Expo', expoSchema);
module.exports = Expo;




