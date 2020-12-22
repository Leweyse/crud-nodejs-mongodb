const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index', { index_functions:'/js/index_functions.js' })
};

indexCtrl.renderAbout = (req, res) => {
    res.render('about', { guide_functions:'/js/guide_functions.js' })
};

module.exports = indexCtrl;
