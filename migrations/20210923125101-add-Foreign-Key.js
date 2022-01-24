'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Posts',
    {
    fields: ["userId"],
    type: 'foreign key',
    name: 'userIdFk',
    references: 
    { //Required field
      table: 'Users',
      field: 'userId',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Posts","userIdFk")
  }
};
