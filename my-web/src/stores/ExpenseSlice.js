import { createSlice } from '@reduxjs/toolkit';
import * as expenseService from '../api/expenseApi';

const initialState = {
  expenses: [],
};
const ExpenseSlice = createSlice({
  name: 'Expense',
  initialState,
  reducers: {
    setExpenseData: (state, action) => {
      state.expenses = action.payload;
    },
    addExpenseData: (state, action) => {
      state.expenses.unshift(action.payload);
    },
    removeExpenseData: (state, action) => {
      const idx = state.expenses.findIndex(
        (item) => item?.id === action.payload
      );
      state.expenses.splice(idx, 1);
    },
  },
});

export default ExpenseSlice.reducer;
export const { setExpenseData, addExpenseData, removeExpenseData } =
  ExpenseSlice.actions;

export const fetchMyExpense = () => {
  return async (dispatch) => {
    try {
      const res = await expenseService.getMyExpense();
      console.log(res.data);
      dispatch(setExpenseData(res.data.myExpensesRes));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchOtherExpense = () => {
  return async (dispatch) => {
    try {
      const res = await expenseService.getOtherExpense();
      console.log(res.data);
      dispatch(setExpenseData(res.data.otherExpensesRes));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchAllExpense = () => {
  return async (dispatch) => {
    try {
      const res = await expenseService.getAllExpense();
      console.log(res.data);
      dispatch(setExpenseData(res.data.allExpenseRes));
    } catch (err) {
      console.log(err);
    }
  };
};
export const handleCreateExpense = (input) => {
  return async (dispatch) => {
    try {
      const res = await expenseService.createExpense(input);
      console.log(res.data);
      dispatch(addExpenseData(res.data.createdExpenseRes));
    } catch (err) {
      console.log(err);
    }
  };
};
export const handleDeleteExpense = (expenseId) => {
  return async (dispatch) => {
    try {
      const res = await expenseService.deleteExpense(expenseId);
      console.log(res.data);
      await dispatch(removeExpenseData(expenseId));
    } catch (err) {
      console.log(err);
    }
  };
};
