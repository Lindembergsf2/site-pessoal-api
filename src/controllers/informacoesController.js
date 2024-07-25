const informacoesRepository = require('../repositories/informacoesRepository');

exports.getInformacoes = async (req, res) => {
    const informacao = await informacoesRepository.getInformacoes();
    res.json(informacao);
}

exports.createInformacoes = async (req, res) => {
    const informacoes = req.body;
    const newInformacao = await informacoesRepository.createInformacoes(informacoes);
    res.json(newInformacao);
}

exports.deleteInformacoes = async (req, res) => {
    const id = parseInt(req.params.id);
    await informacoesRepository.deleteinformacoes(id);
    res.json({message: `Informação ID=${id} excluída com sucesso!`});
}

exports.updateInformacoes = async (req, res) => {
    const id = parseInt(req.params.id);
    const informacoes = req.body;
    const updatedInformacao = await informacoesRepository.updateInformacoes(id, informacoes);
    res.json(updatedInformacao);
}