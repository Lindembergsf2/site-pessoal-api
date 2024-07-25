const express = require('express');

const experienciasController = require('../controllers/experienciaController');

const router = express.Router();

router.get('/', experienciasController.getAllExperiencias);
router.get('/:id', experienciasController.getExperienciasByID);
router.post('/', experienciasController.createExperiencia);
router.delete('/:id', experienciasController.deleteExperiencia);
router.put('/:id', experienciasController.updateExperiencia);

module.exports = router;