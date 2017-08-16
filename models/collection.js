const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  title: String,
  description: String
});

const Collection = mongoose.model('Collection', collectionSchema);
module.exports = Collection;
