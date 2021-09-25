const Sequelize = require("sequelize");

const dbConfig = require('../config/database')
const Usuario = require('../model/Usuario');

const connections = new Sequelize(dbConfig);

Usuario.init(connections);

module.exports = connections;