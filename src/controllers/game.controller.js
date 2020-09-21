const gameCtrl = {};

const Note = require('../models/Note');

gameCtrl.renderGameNote = (req, res) => {
    Note.aggregate([
        { $sample: { size: 1 } }
    ])
    .then(function (result) {
        res.render('notes/game-note', { result })
    });
}

gameCtrl.gameNote = (req, res) => {
    const { title, confirm_title, description, confirm_description } = req.body;

    if (title === confirm_title && description === confirm_description) {
        req.flash('success_msg', 'Answers match!');
        res.redirect('/notes/game')
    } else if (title === confirm_title && description !== confirm_description) {
        req.flash('error_msg', 'Title match, but description do not!');
        res.redirect('/notes/game')
    } else if (title !== confirm_title && description === confirm_description) {
        req.flash('error_msg', 'Description match, but title do not!');
        res.redirect('/notes/game')
    } else {
        req.flash('error_msg', 'Answers do not match!');
        res.redirect('/notes/game')
    }
};

module.exports = gameCtrl;
