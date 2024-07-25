const portfolioRepostory = require('../repositories/potfolioRepository');

exports.getPortfolio = async (req, res) => {
    const portfolio = await portfolioRepostory.getPortfolio();
    return res.json(portfolio);
}

exports.getPortfolioByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const portfolio = await portfolioRepostory.getPortfolioByID(id);
    return res.json(portfolio);
}

exports.createPortfolio = async (req, res) => {
    const portfolio = req.body;
    const newPortfolio = await portfolioRepostory.createPortfolio(portfolio);
    return res.json(newPortfolio);
}

exports.updatePortfolio = async (req, res) => {
    const id = parseInt(req.params.id);
    const portfolio = req.body;
    const updatedPortfolio = await portfolioRepostory.updatePortfolio(id, portfolio);
    return res.json(updatedPortfolio);
}

exports.deletePortfolio = async (req, res) => {
    const id = parseInt(req.params.id);
    await portfolioRepostory.deletePortfolio(id);
    return res.json({ message: `Portfolio ID=${id} excluído com sucesso!` });
}