'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('attendances', {
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
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      timeIn: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      timeOut: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      dayStatus: {
        type: Sequelize.ENUM(['off day', 'work day', 'holiday', 'leave day']),
        defaultValue: 'work day',
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
    await queryInterface.dropTable('employee_status');
  }
};
