'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('banks', [
      {
        bankCode: '014',
        bankName: 'BCA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bankCode: '009',
        bankName: 'BNI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bankCode: '002',
        bankName: 'BRI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bankCode: '008',
        bankName: 'MANDIRI',
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
