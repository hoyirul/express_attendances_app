module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('employees', { timestamps: false });
  const Addresses = sequelize.define('addresses', {
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subdistrict: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ward: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rtRw: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressType: {
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
    tableName: 'addresses',
  });

  Addresses.belongsTo(Employees);

  return Addresses;
}