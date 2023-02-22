'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('institutions', [
      {
        institution: 'Politeknik Negeri Malang',
        city: 'Malang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        institution: 'Universitas Brawijaya',
        city: 'Malang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        institution: 'Universitas Sebelas Maret',
        city: 'Semarang',
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
