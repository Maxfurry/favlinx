const Course = require('../model/structures/class.js');
const Chat = require('../model/structures/chats.js');

let getHomePage = (req, res, next) => {
    let courses = new Course();
    courses = courses.all;
    let allcourse = [];

    for(i in courses) {
        allcourse.push(i);
    }

    let chats = new Chat();
    chats = chats.all;
    let room = [];

    for(x in chats) {
        room.push(x);
    }

    res.render('index', {courses: allcourse, chats: room});
}

module.exports = {
    getHomePage: getHomePage
};