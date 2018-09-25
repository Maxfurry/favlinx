var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('class');
});
  

router.get('/teach', function(req, res, next) {
    let classname = req.query.classname;
    let handle = req.query.username;
    console.log(classname, handle)
    res.render('teacherClass', {classname: classname, handle: handle});
});
  
router.get('/learn', function(req, res, next) {
    let classname = req.query.classname;
    let handle = req.query.username;
    res.render('studentClass', {classname: classname, handle: handle});
});
  
module.exports = router;