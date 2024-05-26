require('dotenv').config();
const { Subscribe } = require("../models/subscribeSchema");
const nodemailer = require('nodemailer');

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

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: 'New Subscription',
      text: `New subscription received:\n\nName: ${name} ${lastName}\nEmail: ${email}\nCity: ${city}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({
      message: "Customer added successfully",
      customer: newCustomer,
    });
  } catch (error) {
    console.error("Error adding Subscribe:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addCustomer };
