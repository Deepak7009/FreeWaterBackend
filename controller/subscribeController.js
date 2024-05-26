const { Subscribe } = require("../models/subscribeSchema");

const addCustomer = async (req, res) => {
  try {
    const { name, lastName, email, city } = req.body;

    const newCustomer = new Subscribe({
      name,
      lastName,
      email,
      city
    });

    await newCustomer.save();

    res.status(201).json({
      message: "Customer added successfully",
      customer: newCustomer,
    });
  } catch (error) {
    console.error("Error adding Subscribe :", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addCustomer };
