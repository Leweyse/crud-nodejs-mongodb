const { Router } = require('express')
const router = Router();

const {
    renderNewInfinitiefForm,
    createNewInfinitief,
    renderInfinitiefs,
    renderEditFormInfinitief,
    updateInfinitief,
    deleteInfinitief,
    renderTestInfinitief,
    testInfinitief
} = require('../controllers/infinitiefs.controller')

const { isAuthenticated } = require('../helpers/auth');

// New Infinitief
router.get('/werkwoords/infinitiefs/add', isAuthenticated, renderNewInfinitiefForm);
router.post('/werkwoords/infinitiefs/nieuwe', isAuthenticated, createNewInfinitief);

// Get All Infinitief
router.get('/werkwoords/infinitiefs', isAuthenticated, renderInfinitiefs);

// Edit Infinitiefs
router.get('/werkwoords/infinitiefs/bewerken/:id', isAuthenticated, renderEditFormInfinitief);
router.put('/werkwoords/infinitiefs/bewerken/:id', isAuthenticated, updateInfinitief);

// Delete Infinitiefs
router.delete('/werkwoords/infinitiefs/verwijderen/:id', isAuthenticated, deleteInfinitief);

// Test Infinitiefs
router.get('/werkwoords/infinitiefs/test', isAuthenticated, renderTestInfinitief)
router.post('/werkwoords/infinitiefs/test', isAuthenticated, testInfinitief);

module.exports = router;
