const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  number: Number,
  email: String,
  details: {
    companyName: String,
    typeOfBusiness: String,
    advertise: String,
    budget: String,
    message: String,
  },
});

const Contact = mongoose.model('ContactField', contactSchema);

module.exports = { Contact };
