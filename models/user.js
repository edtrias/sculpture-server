const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  web: String,
  address: String,
  postalCode: String,
  province: String,
  city: String,
  phone: String,
  username: String,
  password: String

});

const User = mongoose.model('User', userSchema);
module.exports = User;
