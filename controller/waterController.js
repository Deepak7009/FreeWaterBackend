const { Contact } = require("../models/contactSchema");

const addFields = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      number,
      email,
      company,
      businessType,
      advertising,
      budget,
      message,
    } = req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      number,
      email,
      details: {
        company,
        businessType,
        advertising,
        budget,
        message,
      },
    });

    await newContact.save();

    res.status(201).json({
      message: "Contact added successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error("Error adding contact :", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addFields };
