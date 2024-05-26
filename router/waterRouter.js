const express = require('express');
const router = express.Router();
const { addFields } 
= require('../controller/waterController'); 
const { addSubscriber } = require('../controller/subscribeController');


router.post('/contact', addFields); 
router.post('/subscribe', addSubscriber)


module.exports = router;
