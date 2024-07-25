require('./config/dotenv');

const express = require('express');
const { initDatabase } = require('./config/db');
const cors = require('cors');

const experienciasRoute = require('./routes/exprerienciasRoute');
const portfolioRoute = require('./routes/portofolioRoute');
const authRoute = require('./routes/authRoute');
const informacoesRoute = require('./routes/infromacoesRoute');

const app = express();

const port = process.env.APP_PORT;

app.get('/', (req, res) => {
    res.send('Seja bem vindo à API do Meu Site Pessoal!');
});

app.use(cors());

app.use(express.json());

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolio', portfolioRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);

initDatabase();


app.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`);
});