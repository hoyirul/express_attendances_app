var express = require('express');
var router = express.Router();
const upload = require('../middlewares/document.middleware');
var bankController = require('./../controllers/bank.controller');
var employeestatusController = require('./../controllers/employeestatus.controller');
var institutionController = require('./../controllers/institution.controller');
var departementController = require('./../controllers/departement.controller');
var documentController = require('./../controllers/document.controller');
var employeeController = require('./../controllers/employee.controller');
const userController = require('../Controllers/auth.controller');
const { signup, login, testi } = userController;

router.post('/login', login);
// router.get('/testi', testi);
router.post('/testi', testi);

/* GET Employee */
router.get('/profile', employeeController.index);
router.get('/employee/:id', employeeController.getById);

/* GET Banks */
router.get('/banks', bankController.index);
router.get('/banks/:id', bankController.show);
router.post('/banks/', bankController.store);
router.put('/banks/:id', bankController.update);
router.delete('/banks/:id', bankController.destroy);

/* GET Employee Status */
router.get('/employeestatus', employeestatusController.index);
router.get('/employeestatus/:id', employeestatusController.show);
router.post('/employeestatus/', employeestatusController.store);
router.put('/employeestatus/:id', employeestatusController.update);
router.delete('/employeestatus/:id', employeestatusController.destroy);

/* GET Institutions */
router.get('/institutions', institutionController.index);
router.get('/institutions/:id', institutionController.show);
router.post('/institutions/', institutionController.store);
router.put('/institutions/:id', institutionController.update);
router.delete('/institutions/:id', institutionController.destroy);

/* GET Departement */
router.get('/departements', departementController.index);
router.get('/departements/:id', departementController.show);
router.post('/departements/', departementController.store);
router.put('/departements/:id', departementController.update);
router.delete('/departements/:id', departementController.destroy);

// Test upload image
router.get('/documents', documentController.index);
router.post('/documents', documentController.store);
router.put('/documents/:id', documentController.update);
router.delete('/documents/:id', documentController.destroy);

module.exports = router;
