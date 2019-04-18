'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      { title: 'Rambo', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Titanic', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Wiedźmin', createdAt: new Date(), updatedAt: new Date() }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {})
  }
};
