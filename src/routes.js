const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Ola Mundo')
});

module.exports = routes;