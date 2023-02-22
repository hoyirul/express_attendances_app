'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      nik: {
        type: Sequelize.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      institutionId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: {
            tableName: 'institutions',
          },
          key: 'id'
        },
      },
      departementId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: {
            tableName: 'departements',
          },
          key: 'id'
        },
      },
      bankId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: {
            tableName: 'banks',
          },
          key: 'id'
        },
      },
      employeeStatusId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: {
            tableName: 'employee_status',
          },
          key: 'id'
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      placeOfBirth: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM(['L', 'P']),
        defaultValue: 'L',
        allowNull: false,
      },
      dateIn: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      longApprentice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      existingEdu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      major: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      blood: {
        type: Sequelize.ENUM(['A', 'AB', 'B', 'O', '-']),
        defaultValue: '-',
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
    await queryInterface.dropTable('employees');
  }
};
