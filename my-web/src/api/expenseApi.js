import axios from '../config/axios';

export const getMyExpense = () => axios.get('/expense/me');
export const getOtherExpense = () => axios.get('/expense/other');
export const getAllExpense = () => axios.get('/expense/all');
export const deleteExpense = (expenseId) =>
  axios.delete(`/expense/${expenseId}`);
export const createExpense = (input) => axios.post('/expense', input);
