var express = require('express');
var router = express.Router();
var bankController = require('./../controllers/bank.controller');
var employeestatusController = require('./../controllers/employeestatus.controller');
var institutionController = require('./../controllers/institution.controller');
var departementController = require('./../controllers/departement.controller');

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

module.exports = router;
