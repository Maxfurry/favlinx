const Chats = require('../model/structures/chats.js');

let getConferencePage = (req, res, next) => {
    res.render('conference');
}

module.exports = {
    getConferencePage: getConferencePage
}