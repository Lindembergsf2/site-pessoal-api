const express = require('express');

const portfolioController = require('../controllers/portfolioController');

const router = express.Router();

router.get('/', portfolioController.getPortfolio);
router.get('/:id', portfolioController.getPortfolioByID);
router.post('/', portfolioController.createPortfolio);
router.delete('/:id', portfolioController.deletePortfolio);
router.put('/:id', portfolioController.updatePortfolio);

module.exports = router;