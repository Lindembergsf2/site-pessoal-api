const experienciasRepostory = require('../repositories/experienciasRepository');

exports.getAllExperiencias = async (req, res) => {
    const experiencias = await experienciasRepostory.getAllExperiencias();
    res.json(experiencias);
    
};

exports.getExperienciasByID = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencias = await experienciasRepostory.getExperienciasByID(id);
    res.json(experiencias);
};

exports.getExperienciasByTipo = async (req, res) => { 
    const tipo = req.params.tipo;
    const experiencias = await experienciasRepostory.getExperienciasByTipo(tipo);
    res.json(experiencias);
}

exports.createExperiencia = async (req, res) => {
    const experiencia = req.body;
    const newExperiencia = await experienciasRepostory.createExperiencia(experiencia);
    res.json(newExperiencia);
};

exports.updateExperiencia = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = req.body;
    const updatedExperiencia = await experienciasRepostory.updateExperiencia(id, experiencia);
    res.json(updatedExperiencia);
};

exports.deleteExperiencia = async (req, res) => {
    const id = parseInt(req.params.id);
    await experienciasRepostory.deleteExperiencia(id);
    res.json({ message: `Experiência ID=${id} excluída com sucesso!` });
}