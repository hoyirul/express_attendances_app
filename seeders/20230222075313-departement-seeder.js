'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('departements', [
      {
        departementName: 'Manufaktur',
        description: '-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        departementName: 'Produksi',
        description: '-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        departementName: 'Logistik',
        description: '-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        departementName: 'QA',
        description: '-',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
