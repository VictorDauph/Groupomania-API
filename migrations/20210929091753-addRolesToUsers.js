'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "role",
    {
      type: Sequelize.STRING(60),
      allowNull:false,
      defaultValue:"standard" 
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "role")
  }
};
