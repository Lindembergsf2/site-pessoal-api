
const usuariosRepostory = require('../repositories/usuariosRepository');

exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const usuarios = await usuariosRepostory.getUsuarioByEmail(email);

    if (!usuarios || usuarios.password !== password) {
        return res.status(401).json({ message: 'Usuário ou senha inválidos' });
    }

    return res.status(200).json({ message: 'Login bem-sucedido' });
}