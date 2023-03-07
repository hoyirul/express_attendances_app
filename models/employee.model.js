module.exports = (sequelize, DataTypes) => {
  const Banks = sequelize.define('banks', { timestamps: false });
  const EmployeeStatus = sequelize.define('employeeStatus', { timestamps: false });
  const Institutions = sequelize.define('institutions', { timestamps: false });
  const Departements = sequelize.define('departements', { timestamps: false });
  const Employees = sequelize.define('employees', {
    nik: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      allowNull: false,
    },
    institutionId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'institutions',
        },
        key: 'id'
      },
    },
    departementId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'departements',
        },
        key: 'id'
      },
    },
    bankId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'banks',
        },
        key: 'id'
      },
    },
    employeeStatusId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'employee_status',
        },
        key: 'id'
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    placeOfBirth: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(['L', 'P']),
      defaultValue: 'L',
      allowNull: false,
    },
    dateIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    longApprentice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    existingEdu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blood: {
      type: DataTypes.ENUM(['A', 'AB', 'B', 'O', '-']),
      defaultValue: '-',
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'employees',
  });

  Employees.belongsTo(Banks);
  Employees.belongsTo(EmployeeStatus);
  Employees.belongsTo(Institutions);
  Employees.belongsTo(Departements);

  return Employees;
}