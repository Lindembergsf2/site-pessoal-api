const { pool } = require('../config/db');

exports.getPortfolio = async (req, res) => {
    const result = await pool.query('SELECT * FROM portfolio');
    return result.rows;
}

exports.getPortfolioByID = async (id) => {
    const result = await pool.query('SELECT * FROM portfolio WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createPortfolio = async (portfolio) => {
    const result = await pool.query(
        'INSERT INTO portfolio (link, image, title) VALUES ($1, $2, $3) RETURNING *',
        [portfolio.link, portfolio.image, portfolio.title]
    )
    return result.rows[0];
}

exports.updatePortfolio = async (id, portfolio) => {
    const result = await pool.query(
        'UPDATE portfolio SET link = $1, image = $2, title = $3 WHERE id = $4 RETURNING *',
        [portfolio.link, portfolio.image, portfolio.title, id]
    )
    return result.rows[0];
}

exports.deletePortfolio = async (id) => {
    const result = await pool.query('DELETE FROM portfolio WHERE id = $1', [id]);
}