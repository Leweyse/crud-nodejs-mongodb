const { Router } = require('express')
const router = Router();

const {
    renderGameNote,
    gameNote,
} = require('../controllers/game.controller')

const { isAuthenticated } = require('../helpers/auth');

router.get('/notes/game', isAuthenticated, renderGameNote);
router.post('/notes/gameNote', isAuthenticated, gameNote);

module.exports = router;
