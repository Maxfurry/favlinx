const Course = require('../model/structures/class.js');

let createNewClass = (req, res, next) => {
    let classname = req.body.classname;
    let handle = req.body.username;
    console.log(classname, handle)

    let course = new Course(classname, handle);
    course.save;
    
    res.render('teacherClass', {classname: classname, handle: handle});
}

let joinClass = (req, res, next) => {
    let classname = req.body.classname;
    let handle = req.body.username;
    res.render('studentClass', {classname: classname, handle: handle});
}

module.exports = {
    createNewClass: createNewClass,
    joinClass: joinClass
};