const sequelize = require("sequelize");

const dbConfig = require('../config/database');

const connections = new Sequelize(dbConfig);

Usuario.init(connections);

module.exports = connections;