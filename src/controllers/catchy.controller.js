const catchyCtrl = {};

const Note = require('../models/Note');

catchyCtrl.renderCatchyNote = (req, res) => {
    Note.aggregate([
        { $sample: { size: 1 } }
    ])
    .then(function (result) {
        res.render('notes/catchy', { result: result, catchy_functions:'/js/catchy_functions.js' })
    });
}

catchyCtrl.catchyNote = (req, res) => {
    const { title, confirm_title, description, confirm_description } = req.body;

    if (title === confirm_title && description === confirm_description) {
        req.flash('success_msg', 'Answers match!');
        res.redirect('/notes/catchy')
    } else {
        if (title === confirm_title && description !== confirm_description) {
            req.flash('success_msg', 'Correct!');
            res.redirect('/notes/catchy')
        } else {
            if (title !== confirm_title && description === confirm_description) {
                req.flash('success_msg', 'Correct!');
                res.redirect('/notes/catchy')
            } else {
                req.flash('error_msg', 'Wrong!');
                res.redirect('/notes/catchy')
            }
        }
    }
};

module.exports = catchyCtrl;
