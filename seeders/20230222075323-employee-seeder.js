'use strict';
var bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', [
      {
        nik: '10282',
        institutionId: 1,
        departementId: 1,
        bankId: 1,
        employeeStatusId: 3,
        name: 'Satriya Rifki Pangestu',
        email: 'sample@gmail.com',
        password: bcrypt.hashSync('password'),
        placeOfBirth: 'Genteng, Banyuwangi',
        dateOfBirth: '2001-08-12',
        gender: 'P',
        dateIn: '2023-01-18',
        longApprentice: 6,
        existingEdu: 'D4 Teknik Informatika',
        major: 'Teknologi Informasi',
        blood: 'A',
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
