const {Model, DataTypes} = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
      super.init({
          titulo: DataTypes.STRING,
          usuario: DataTypes.STRING,
      }, {
        sequelize
      })
    }
  }
  
module.exports = Usuario;