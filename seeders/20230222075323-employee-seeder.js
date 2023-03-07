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
        isActive: 1,
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
      },
      {
        nik: '10278',
        institutionId: 1,
        departementId: 1,
        bankId: 1,
        employeeStatusId: 3,
        name: 'Muhammad Lazuardi Timur',
        isActive: 1,
        email: 'sample3@gmail.com',
        password: bcrypt.hashSync('password'),
        placeOfBirth: 'Pasuruan',
        dateOfBirth: '2001-01-01',
        gender: 'P',
        dateIn: '2023-01-18',
        longApprentice: 6,
        existingEdu: 'D4 Teknik Informatika',
        major: 'Teknologi Informasi',
        blood: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nik: '10281',
        institutionId: 1,
        departementId: 1,
        bankId: 1,
        employeeStatusId: 3,
        name: 'Ahmad Farrel Sirajudin Zaidan',
        isActive: 1,
        email: 'sample2@gmail.com',
        password: bcrypt.hashSync('password'),
        placeOfBirth: 'Lawang, Malang',
        dateOfBirth: '2002-07-27',
        gender: 'P',
        dateIn: '2023-01-18',
        longApprentice: 6,
        existingEdu: 'D4 Teknik Informatika',
        major: 'Teknologi Informasi',
        blood: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nik: '10279',
        institutionId: 1,
        departementId: 1,
        bankId: 1,
        employeeStatusId: 3,
        name: 'Firgi Sotya Izzuddin',
        isActive: 1,
        email: 'sample4@gmail.com',
        password: bcrypt.hashSync('password'),
        placeOfBirth: 'Pasuruan',
        dateOfBirth: '2001-02-28',
        gender: 'P',
        dateIn: '2023-01-18',
        longApprentice: 6,
        existingEdu: 'D4 Teknik Informatika',
        major: 'Teknologi Informasi',
        blood: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nik: '10290',
        institutionId: 2,
        departementId: 2,
        bankId: 1,
        employeeStatusId: 1,
        name: 'Diendira Widad Arumi',
        isActive: 1,
        email: 'sample5@gmail.com',
        password: bcrypt.hashSync('password'),
        placeOfBirth: 'Malang, Jawa Timur',
        dateOfBirth: '2002-10-05',
        gender: 'P',
        dateIn: '2023-02-13',
        longApprentice: 4,
        existingEdu: 'S1 Bioteknologi',
        major: 'Bioteknologi',
        blood: 'B',
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
