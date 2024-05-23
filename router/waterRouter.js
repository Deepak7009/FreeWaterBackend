const express = require('express');
const router = express.Router();
const { addFields } 
= require('../controller/waterController'); 


router.post('/contact', addFields); 


module.exports = router;
