const { pool } = require('../config/db');

exports.getInformacoes = async () => {
    const informacao = await pool.query('SELECT * FROM informacoes');
    return informacao.rows[0];
}

exports.createInformacoes = async (informacoes) => {
    const informacao = await pool.query(
        'INSERT INTO informacoes (foto, nome, titulo, resumo) VALUES ($1, $2, $3, $4) RETURNING *',
        [informacoes.foto, informacoes.nome, informacoes.titulo, informacoes.resumo]
    )
    return informacao.rows[0];
}

exports.deleteInformacoes = async (id) => {
    const informacao = await pool.query('DELETE FROM informacoes WHERE id = $1', [id]);
}

exports.updateInformacoes = async (id, informacoes) => {
    const informacao = await pool.query(
        'UPDATE informacoes SET foto = $1, nome = $2, titulo = $3, resumo = $4 WHERE id = $5 RETURNING *',
        [informacoes.foto, informacoes.nome, informacoes.titulo, informacoes.resumo, id]
    )
    return informacao.rows[0];
}