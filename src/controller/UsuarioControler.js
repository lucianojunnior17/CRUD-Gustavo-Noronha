const Usuario = require('../model/Usuario');

module.exports = {
    async index(req, res) {
        const usuario = await Usuario.findAll();
        return res.json(usuario);
    }
}