import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice';
import RegisterReducer from './RegisterSlice';
import LoginReducer from './LoginSlice';
import ExpenseReducer from './ExpenseSlice';
import CreateExpenseReducer from './CreateExpenseSlice';
import DisplayReducer from './DisplaySlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    registerData: RegisterReducer,
    loginData: LoginReducer,
    expense: ExpenseReducer,
    createExpenses: CreateExpenseReducer,
    display: DisplayReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
