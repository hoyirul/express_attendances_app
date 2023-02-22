module.exports = (sequelize, DataTypes) => {
  const Attendances = sequelize.define('attendances', { timestamps: false });
  const Activities = sequelize.define('activities', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    attendanceId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'attendances',
        },
        key: 'id'
      },
    },
    activity: {
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
    tableName: 'activities',
  });

  Activities.belongsTo(Attendances);

  return Activities;
}