var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let groupname = req.query.groupname;
    let handle = req.query.username;
    console.log(groupname, handle)
    res.render('messagings', {groupname: groupname, handle: handle});
});
  
module.exports = router;