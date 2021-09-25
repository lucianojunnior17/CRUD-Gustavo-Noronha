const Usuario = require('../model/Usuario');

module.exports = {
    async index(req, res) {
        const usuarios = await usuario.findAll();
        return res.json(usuarios);
    }
}