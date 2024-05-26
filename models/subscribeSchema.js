const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  number: Number,
  email: String,
  city:String,
});

const Subscribe = mongoose.model('Subscribe', subscribeSchema);

module.exports = { Subscribe };
