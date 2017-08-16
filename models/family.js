const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familySchema = new Schema({
  title: String,
  description: String
});

const Family = mongoose.model('Family', familySchema);
module.exports = Family;
