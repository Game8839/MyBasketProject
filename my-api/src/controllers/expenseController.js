const { User, Expense } = require('../sequelize/models');
const validator = require('validator');
const AppError = require('../utils/appError');
const { Op } = require('sequelize');

exports.createExpense = async (req, res, next) => {
  try {
    const { title, description, type, amount } = req.body;
    const userId = req.user.id;

    if (!title) {
      throw new AppError('please enter expense title');
    }
    if (!type) {
      throw new AppError('please enter type of expense tracker');
    }
    if (!amount) {
      throw new AppError('please apecify the amount');
    }
    if (isNaN(Number(amount))) {
      throw new AppError('amount must be number');
    }

    const createdExpense = await Expense.create({
      title,
      description,
      type,
      amount,
      userId,
    });

    const createdExpenseRes = await Expense.findOne({
      where: { id: createdExpense.id },
      include: { model: User, attributes: { exclude: 'password' } },
    });

    res.status(201).json({ createdExpenseRes });
  } catch (err) {
    next(err);
  }
};

exports.getMyExpenses = async (req, res, next) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      throw new AppError('userId not found ', 400);
    }

    const myExpensesRes = await Expense.findAll({
      where: { userId },
      include: { model: User, attributes: { exclude: 'password' } },
      order: [['createdAt', 'DESC']],
    });

    res.status(201).json({ myExpensesRes });
  } catch (err) {
    next(err);
  }
};

exports.getOtherExpenses = async (req, res, next) => {
  try {
    const myuserId = req.user.id;
    if (!myuserId) {
      throw new AppError('userId not found ', 400);
    }

    const otherExpensesRes = await Expense.findAll({
      where: { userId: { [Op.ne]: myuserId } },
      include: { model: User, attributes: { exclude: 'password' } },
      order: [['createdAt', 'DESC']],
    });

    res.status(201).json({ otherExpensesRes });
  } catch (err) {
    next(err);
  }
};

exports.getAllExpenses = async (req, res, next) => {
  try {
    const allExpenseRes = await Expense.findAll({
      include: { model: User, attributes: { exclude: 'password' } },
      order: [['createdAt', 'DESC']],
    });

    res.status(201).json({ allExpenseRes });
  } catch (err) {
    next(err);
  }
};

exports.deleteMyExpenses = async (req, res, next) => {
  try {
    const myuserId = req.user.id;

    console.log(req);
    const { expenseId } = req.params;
    if (!myuserId) {
      throw new AppError('userId not found ', 400);
    }

    const expenseToDelete = await Expense.findOne({ where: { id: expenseId } });
    if (expenseToDelete.userId !== +myuserId) {
      throw new AppError(`you cannot delete other's expense `, 400);
    } else await expenseToDelete.destroy();

    res.status(201).json({ expenseToDelete, message: 'record deleted' });
  } catch (err) {
    next(err);
  }
};
