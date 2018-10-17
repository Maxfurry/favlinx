const express = require('express');
const router = express.Router(); 
const controller = require('../controller/conference');
  
router.post('/conference', controller.getConferencePage);
  
module.exports = router;