let getConferencePage = (req, res, next) => {
    let handle = req.query.username;
    console.log(handle)
    res.render('conference');
}

module.exports = {
    getConferencePage: getConferencePage
}