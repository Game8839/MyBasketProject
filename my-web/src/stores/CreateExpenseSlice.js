import { createSlice } from '@reduxjs/toolkit';
import * as expenseService from '../api/expenseApi';

const initialState = {
  createExpenses: { title: '', description: '', type: '', amount: '' },
};
const createExpenseSlice = createSlice({
  name: 'createExpense',
  initialState,
  reducers: {
    setCreateExpenseData: (state, action) => {
      state.createExpenses[action.payload.name] = action.payload.value;
    },
    resetCreateExpenseData: (state, action) => {
      state.createExpenses = {
        title: '',
        description: '',
        type: '',
        amount: '',
      };
    },
  },
});

export default createExpenseSlice.reducer;
export const { setCreateExpenseData, resetCreateExpenseData } =
  createExpenseSlice.actions;
