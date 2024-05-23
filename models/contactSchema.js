const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  number: Number,
  email: String,
});

const Contact = mongoose.model('ContactField', contactSchema);

module.exports = { Contact };
