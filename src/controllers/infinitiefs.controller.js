const infinitiefsCtrl = {};

const Infinitief = require('../models/WInfinitief');

infinitiefsCtrl.renderNewInfinitiefForm = (req, res) => {
    res.render('werkwoords/infinitiefs/nieuweInfinitief');
}

infinitiefsCtrl.createNewInfinitief = async (req, res) => {
    const { iVlaams, iSpaans, ik_ver, jij_ver, u_ver, hij_zij_ze_ver, wij_we_ver, jullie_ver, zij_ze_ver } = req.body;
    const newInfinitief = new Infinitief({ iVlaams, iSpaans, ik_ver, jij_ver, u_ver, hij_zij_ze_ver, wij_we_ver, jullie_ver, zij_ze_ver });
    newInfinitief.user = req.user.id;
    await newInfinitief.save();
    req.flash('success_msg', 'Infinitief added successfully!');
    res.redirect('/werkwoords/infinitiefs');
}

infinitiefsCtrl.renderInfinitiefs = async (req, res) => {
    const infinitiefs = await Infinitief.find({user: req.user.id}).sort({createdAt: 'desc'}).lean();
    res.render('werkwoords/infinitiefs/infinitiefs', { infinitiefs: infinitiefs });
}

infinitiefsCtrl.renderEditFormInfinitief = async (req, res) => {
    const infinitief = await Infinitief.findById(req.params.id).lean();
    if (infinitief.user != req.user.id) {
        req.flash('error_msg', 'Not Authorized');
        return res.redirect('/werkwoords/infinitiefs');
    }
    res.render('werkwoords/infinitiefs/bewerkenInfinitief', { infinitief });
}

infinitiefsCtrl.updateInfinitief = async (req, res) => {
    const { iVlaams, iSpaans, ik_ver, jij_ver, u_ver, hij_zij_ze_ver, wij_we_ver, jullie_ver, zij_ze_ver } = req.body;
    await Infinitief.findByIdAndUpdate(req.params.id, { iVlaams, iSpaans, ik_ver, jij_ver, u_ver, hij_zij_ze_ver, wij_we_ver, jullie_ver, zij_ze_ver });
    req.flash('success_msg', 'Infinitief updated successfully!');
    res.redirect('/werkwoords/infinitiefs');
}

infinitiefsCtrl.deleteInfinitief = async (req, res) => {
    await Infinitief.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Infinitief deleted successfully!');
    res.redirect('/werkwoords/infinitiefs');
}

infinitiefsCtrl.renderTestInfinitief = (req, res) => {
    Infinitief.aggregate([
        { $sample: { size: 1 } }
    ])
    .then(function (result) {
        res.render('werkwoords/infinitiefs/testInfinitiefs', { result: result })
    });
}

infinitiefsCtrl.testInfinitief = (req, res) => {
    const { iVlaams, confirm_iVlaams, iSpaans, confirm_iSpaans } = req.body;

    if (iVlaams === confirm_iVlaams && iSpaans === confirm_iSpaans) {
        req.flash('success_msg', 'Answers match!');
        res.redirect('/werkwoords/infinitiefs/TestInfinitief')
    } else {
        if (iVlaams === confirm_iVlaams && iSpaans !== confirm_iSpaans) {
            req.flash('success_msg', 'Correct!');
            res.redirect('/werkwoords/infinitiefs/TestInfinitief')
        } else {
            if (iVlaams !== confirm_iVlaams && iSpaans === confirm_iSpaans) {
                req.flash('success_msg', 'Correct!');
                res.redirect('/werkwoords/infinitiefs/TestInfinitief')
            } else {
                req.flash('error_msg', 'Wrong!');
                res.redirect('/werkwoords/infinitiefs/TestInfinitief')
            }
        }
    }
};

module.exports = infinitiefsCtrl;
