'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 //suppression colonne commentsList de la table post
      return queryInterface.removeColumn("Posts", "commentsList")
    
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn("Users", "sharedPosts",
      {
        type: Sequelize.JSON,
        defaultValue:"[]"
    })
  }
};
