'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
/*      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Artists', [{
        firstName: 'John',
        lastName: 'Doe',
        description: 'cantante de musica latina',
        image: 'hola.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jhonny',
        lastName: 'Doemon',
        description: 'cantante de musica romantica',
        image: 'hola.png',
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
