module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define(
    'Expense',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      description: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM('income', 'expense'),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      indexes: [
        // Create a unique index on email
        {
          unique: true,
          fields: ['id'],
        },
      ],
    },
    { underscored: true }
  );
  Expense.associate = (db) => {
    Expense.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Expense;
};
