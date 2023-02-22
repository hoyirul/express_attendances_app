module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('employees', { timestamps: false });
  const Institutions = sequelize.define('institutions', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
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
    tableName: 'institutions',
  });

  Institutions.hasMany(Employees);

  return Institutions;
}