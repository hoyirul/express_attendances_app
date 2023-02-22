'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('documents', {
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
      idCardPhoto: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      officialPhoto: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      bankPhoto: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('documents');
  }
};
