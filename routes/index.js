const express = require('express');
const router = express.Router();
const controller = require('../controller/index.js');

/* GET home page. */
router.get('/', controller.getHomePage);
  
module.exports = router;