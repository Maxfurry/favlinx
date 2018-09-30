const express = require('express');
const router = express.Router(); 
const controller = require('../controller/class');

router.get('/teach', controller.createNewClass);
  
router.get('/learn', controller.joinClass);
  
module.exports = router;