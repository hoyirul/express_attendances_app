'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('addresses', [
      {
        nik: '10282',
        address: 'Jl. Kaliurang, Malang',
        city: 'Malang',
        subdistrict: 'Lowokwaru',
        ward: 'Kaliurang',
        rtRw: '09/13',
        addressType: 'ktp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nik: '10282',
        address: 'Jl. Kaliurang, Banyuwangi',
        city: 'Banyuwangi',
        subdistrict: 'Raniuan',
        ward: 'Dominix',
        rtRw: '12/05',
        addressType: 'now',
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
