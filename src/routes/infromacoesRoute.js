const express = require('express');
const informacoesController = require('../controllers/informacoesController');

const router = express.Router();

router.get('/1', informacoesController.getInformacoes);
router.post('/1', informacoesController.createInformacoes);
router.delete('/1', informacoesController.deleteInformacoes);
router.put('/:id', informacoesController.updateInformacoes);

module.exports = router;