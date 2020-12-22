const uitdrukkingenCtrl = {};

const Uitdrukkingen = require('../models/Uitdrukkingen');

uitdrukkingenCtrl.renderNewUitdrukkingForm = (req, res) => {
    res.render('uitdrukkingen/nieuweUitdrukking');
}

uitdrukkingenCtrl.createNewUitdrukking = async (req, res) => {
    const { uVlaams, uSpaans } = req.body;
    const nieuweUitdrukkingen = new Uitdrukkingen({ uVlaams, uSpaans });
    nieuweUitdrukkingen.user = req.user.id;
    await nieuweUitdrukkingen.save();
    req.flash('success_msg', 'Expression added successfully!');
    res.redirect('/uitdrukkingen');
}

uitdrukkingenCtrl.renderUitdrukkingen = async (req, res) => {
    const uitdrukkingen = await Uitdrukkingen.find({user: req.user.id}).sort({createdAt: 'desc'}).lean();
    res.render('uitdrukkingen/uitdrukkingen', { uitdrukkingen: uitdrukkingen });
}

uitdrukkingenCtrl.renderEditFormUitdrukking = async (req, res) => {
    const uitdrukking = await Uitdrukkingen.findById(req.params.id).lean();
    if (uitdrukking.user != req.user.id) {
        req.flash('error_msg', 'Not Authorized');
        return res.redirect('/uitdrukkingen');
    }
    res.render('uitdrukkingen/bewerkenUitdrukking', { uitdrukking });
}

uitdrukkingenCtrl.updateUitdrukking = async (req, res) => {
    const { uVlaams, uSpaans } = req.body;
    await Uitdrukkingen.findByIdAndUpdate(req.params.id, { uVlaams, uSpaans });
    req.flash('success_msg', 'Expression updated successfully!');
    res.redirect('/uitdrukkingen');
}

uitdrukkingenCtrl.deleteUitdrukking = async (req, res) => {
    await Uitdrukkingen.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Expression deleted successfully!');
    res.redirect('/uitdrukkingen');
}

uitdrukkingenCtrl.renderTestUitdrukking = (req, res) => {
    Uitdrukkingen.aggregate([
        { $sample: { size: 1 } }
    ])
    .then(function (result) {
        res.render('uitdrukkingen/TestUitdrukkingen', { result: result })
    });
}

uitdrukkingenCtrl.testUitdrukking = (req, res) => {
    const { uVlaams, confirm_uVlaams, uSpaans, confirm_uSpaans } = req.body;

    if (uVlaams === confirm_uVlaams && uSpaans === confirm_uSpaans) {
        req.flash('success_msg', 'Answers match!');
        res.redirect('/uitdrukkingen/test')
    } else {
        if (uVlaams === confirm_uVlaams && uSpaans !== confirm_uSpaans) {
            req.flash('success_msg', 'Answers match!');
            res.redirect('/uitdrukkingen/test')
        } else {
            if (uVlaams !== confirm_uVlaams && uSpaans === confirm_uSpaans) {
                req.flash('success_msg', 'Answers match!');
                res.redirect('/uitdrukkingen/test')
            } else {
                req.flash('error_msg', 'Wrong!');
                res.redirect('/uitdrukkingen/test')
            }
        }
    }
};


module.exports = uitdrukkingenCtrl;
