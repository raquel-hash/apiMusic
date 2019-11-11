'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [{
      titulo: 'Romanticas',
      description: 'album 200 canciones',
      gestion: '2018',
      image: 'hola.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Rock',
      description: 'album 120 canciones',
      gestion: '2019',
      image: 'rock.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
