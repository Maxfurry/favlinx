const express = require('express');
const router = express.Router(); 
const controller = require('../controller/conference');
  
router.get('/conference', controller.getConferencePage);
  
module.exports = router;