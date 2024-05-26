const express = require('express');
const router = express.Router();
const { addFields } 
= require('../controller/waterController'); 
const { addCustomer } = require('../controller/subscribeController');


router.post('/contact', addFields); 
router.post('/subscribe', addCustomer)


module.exports = router;
