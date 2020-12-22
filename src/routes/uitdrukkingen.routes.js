const { Router } = require('express')
const router = Router();

const {
    renderNewUitdrukkingForm,
    createNewUitdrukking,
    renderUitdrukkingen,
    renderEditFormUitdrukking,
    updateUitdrukking,
    deleteUitdrukking,
    renderTestUitdrukking,
    testUitdrukking
} = require('../controllers/uitdrukkingen.controller')

const { isAuthenticated } = require('../helpers/auth');

// New Uitdrukking
router.get('/uitdrukkingen/add', isAuthenticated, renderNewUitdrukkingForm);
router.post('/uitdrukkingen/nieuwe', isAuthenticated, createNewUitdrukking);

// Get All Uitdrukking
router.get('/uitdrukkingen', isAuthenticated, renderUitdrukkingen);

// Edit Uitdrukking
router.get('/uitdrukkingen/bewerken/:id', isAuthenticated, renderEditFormUitdrukking);
router.put('/uitdrukkingen/bewerken/:id', isAuthenticated, updateUitdrukking);

// Delete Uitdrukking
router.delete('/uitdrukkingen/verwijderen/:id', isAuthenticated, deleteUitdrukking);

// Test Uitdrukkingen
router.get('/uitdrukkingen/test', isAuthenticated, renderTestUitdrukking)
router.post('/uitdrukkingen/test', isAuthenticated, testUitdrukking);

module.exports = router;
