'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nik: {
        type: Sequelize.STRING(10),
        allowNull: false,
        references: {
          model: {
            tableName: 'employees',
          },
          key: 'nik'
        },
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subdistrict: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ward: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rtRw: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};
