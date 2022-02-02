'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { //suppression colonne sharedPosts
    return queryInterface.removeColumn("Users", "sharedPosts")
  },

  down: async (queryInterface, Sequelize) => {
    return 
    }
};
