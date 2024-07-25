const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: `${process.env.DB_PASSWORD}`,
    port: process.env.DB_PORT,
    ssl: process.env.NODE_ENV === 'production' ? true : false
});


const initDatabase = async () => {
    await pool.query(`CREATE TABLE IF NOT EXISTS experiencias (
            id SERIAL PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            tipo VARCHAR(255) NOT NULL,
            descricao TEXT NOT NULL,
            anoInicio VARCHAR(255),
            anoFim VARCHAR(255)
        )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS portfolio (
            id SERIAL PRIMARY KEY,
            link VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            title varchar(255) NOT NULL
        )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS informacoes (
            id SERIAL PRIMARY KEY,
            foto VARCHAR(255) NOT NULL,
            nome VARCHAR(255) NOT NULL,
            titulo VARCHAR(255) NOT NULL,
            resumo TEXT NOT NULL
        )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS usuarios (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );
            `);

    console.log('Banco de dados inicializado com sucesso!');
};

module.exports = { pool, initDatabase };