module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('employees', { timestamps: false });
  const Documents = sequelize.define('documents', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nik: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: {
          tableName: 'employees',
        },
        key: 'nik'
      },
    },
    idCardPhoto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    officialPhoto: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bankPhoto: {
      type: DataTypes.TEXT,
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
    tableName: 'documents',
  });

  Documents.belongsTo(Employees, { foreignKey: 'nik' });

  return Documents;
}