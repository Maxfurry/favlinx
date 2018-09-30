let getMessagengerPage = (req, res, next) => {
    let groupname = req.query.groupname;
    let handle = req.query.username;
    console.log(groupname, handle)
    res.render('messagings', {groupname: groupname, handle: handle});
}

module.exports = {
    getMessagengerPage: getMessagengerPage
}