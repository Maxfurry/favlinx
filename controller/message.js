const Chats = require('../model/structures/chats.js');

let getMessagengerPage = (req, res, next) => {
    let groupname = req.body.groupname;
    let handle = req.body.username;
    console.log(groupname, handle)

    let chats = new Chats(groupname, handle);
    chats.save;

    res.render('messagings', {groupname: groupname, handle: handle});
}

module.exports = {
    getMessagengerPage: getMessagengerPage
}