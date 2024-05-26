const { Contact } = require("../models/contactSchema");
require('dotenv').config();
const nodemailer = require('nodemailer');

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
      subject: 'New Contact',
      text: `New Contact  received:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n Number: ${number} \n 
       Company Name : ${company} \n Business Type : ${businessType} \n Advertising : ${advertising} \n Budget : ${budget} \n Message: ${message} `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

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
