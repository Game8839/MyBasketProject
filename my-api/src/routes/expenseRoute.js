const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/me', expenseController.getMyExpenses);
router.get('/other', expenseController.getOtherExpenses);
router.get('/all', expenseController.getAllExpenses);
router.post('/', expenseController.createExpense);
router.delete('/:expenseId', expenseController.deleteMyExpenses);

module.exports = router;
