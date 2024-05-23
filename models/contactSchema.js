const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  number: Number,
  email: String,
  details: {
    company: String,
    businessType: String,
    advertising: String,
    budget: String,
    message: String,
  },
});

const Contact = mongoose.model('ContactField', contactSchema);

module.exports = { Contact };
