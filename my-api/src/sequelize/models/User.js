module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      mobile: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImage: DataTypes.STRING,
      coverImage: DataTypes.STRING,
    },
    { underscored: true }
  );
  User.associate = (db) => {
    User.hasMany(db.Expense, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },

      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return User;
};
