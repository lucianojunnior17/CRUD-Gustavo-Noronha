const express = require('express');
const UsuarioControler = require('./controller/UsuarioControler');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Ola Mundo')
});

routes.get('/usuario', UsuarioControler.index)



module.exports = routes;