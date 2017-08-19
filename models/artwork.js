const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
  name: String,
  family: { type: Schema.Types.ObjectId, ref: 'Family' },
  material: String,
  specs: String,
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
});

const Artwork = mongoose.model('Artwork', artworkSchema);
module.exports = Artwork;
