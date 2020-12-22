const { Router } = require('express')
const router = Router();

const {
    renderCatchyNote,
    catchyNote,
} = require('../controllers/catchy.controller')

const { isAuthenticated } = require('../helpers/auth');

router.get('/notes/catchy', isAuthenticated, renderCatchyNote)
router.post('/notes/catchyNote', isAuthenticated, catchyNote);

module.exports = router;
