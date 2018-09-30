const express = require('express');
const router = express.Router();
const controller = require('../controller/message');

router.post('/', controller.getMessagengerPage);
  
module.exports = router;