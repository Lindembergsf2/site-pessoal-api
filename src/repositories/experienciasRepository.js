const { pool } = require('../config/db');

exports.getAllExperiencias = async (req, res) => {
    const result = await pool.query('SELECT * FROM experiencias');
    return result.rows;
}

exports.getExperienciasByID = async (id) => {
    const result = await pool.query('SELECT * FROM experiencias WHERE id = $1', [id]);
    return result.rows[0];
}

exports.getExperienciasByTipo = async (tipo) => {
    const result = await pool.query('SELECT * FROM experiencias WHERE tipo = $1', [tipo]);
    return result.rows[0];
}

exports.createExperiencia = async (experiencia) => {
    const result = await pool.query(
        `INSERT INTO experiencias 
        (titulo, tipo, descricao, anoinicio, anofim) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [experiencia.titulo, experiencia.tipo, experiencia.descricao,
        experiencia.anoinicio, experiencia.anofim]
    )
    return result.rows[0];
};

exports.updateExperiencia = async (id, experiencia) => {
    const result = await pool.query(
        `UPDATE experiencias
        SET titulo = $1, tipo = $2, descricao = $3, anoinicio = $4, anofim = $5
        WHERE id = $6 RETURNING *`,
        [experiencia.titulo, experiencia.tipo, experiencia.descricao,
        experiencia.anoinicio, experiencia.anofim, id]
    )
    return result.rows[0];
};

exports.deleteExperiencia = async (id) => {
    const result = await pool.query('DELETE FROM experiencias WHERE id = $1', [id]);
}
