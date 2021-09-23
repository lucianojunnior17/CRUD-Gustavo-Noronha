const express = require('express');

const routes = express.Router();

router.get('/', (req, res) => {
    res.send('Ola Mundo');
})


module.exports = routes;