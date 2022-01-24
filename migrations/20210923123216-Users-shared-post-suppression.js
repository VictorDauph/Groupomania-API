'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { //suppression colonne sharedPosts
    return queryInterface.removeColumn("Users", "sharedPosts")
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "sharedPosts",
    {
      type: Sequelize.JSON,
      defaultValue:"[]"
  }
    )}
};
