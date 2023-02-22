'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employee_status', [
      {
        employeeStatus: 'PKL',
        salary: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeStatus: 'INTERNSHIP',
        salary: 172000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        employeeStatus: 'MAGANG',
        salary: 172000,
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
