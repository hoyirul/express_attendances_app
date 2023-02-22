module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('employees', { timestamps: false });
  const Attendances = sequelize.define('attendances', {
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    timeIn: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    timeOut: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    dayStatus: {
      type: DataTypes.ENUM(['off day', 'work day', 'holiday', 'leave day']),
      defaultValue: 'work day',
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
    tableName: 'attendances',
  });

  Attendances.belongsTo(Employees);

  return Attendances;
}