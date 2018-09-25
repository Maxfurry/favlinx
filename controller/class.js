let createNewClass = (req, res, next) => {
    let classname = req.query.classname;
    let handle = req.query.username;
    console.log(classname, handle)
    res.render('teacherClass', {classname: classname, handle: handle});
}

let joinClass = (req, res, next) => {
    let classname = req.query.classname;
    let handle = req.query.username;
    res.render('studentClass', {classname: classname, handle: handle});
}

module.exports = {
    createNewClass: createNewClass,
    joinClass: joinClass
};