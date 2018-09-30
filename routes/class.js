const express = require('express');
const router = express.Router(); 
const controller = require('../controller/class');

router.post('/teach', controller.createNewClass);
  
router.post('/learn', controller.joinClass);
  
module.exports = router;