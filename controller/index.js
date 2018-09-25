let getHomePage = (req, res, next) => {
    res.render('index');
}

module.exports = {
    getHomePage: getHomePage
};