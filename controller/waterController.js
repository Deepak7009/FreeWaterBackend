const { Contact } = require("../models/contactSchema");

const addFields = async (req, res) => {
  try {
    const { name, lastName, number, email } = req.body;

    const newContact = new Contact({
      name,
      lastName,
      number,
      email,
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
