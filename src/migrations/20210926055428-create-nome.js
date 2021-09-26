
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome:{
        type: Sequelize.STRING,      
        allowNull: false
      },
      Senha:{
        type: Sequelize.STRING,      
        allowNull: false
    },
  })
},  


  down: async (queryInterface, Sequelize) => {
    
  }
};
