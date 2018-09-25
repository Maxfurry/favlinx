const express = require('express');
const router = express.Router();
const controller = require('../controller/message');

router.get('/', controller.getMessagengerPage);
  
module.exports = router;