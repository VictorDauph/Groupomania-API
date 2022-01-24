'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Posts", "flagged",
    {
      type: Sequelize.BOOLEAN,
      defaultValue:false  
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Posts", "flagged")
  }
};
