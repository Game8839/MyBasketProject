import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateExpenseForm from './CreateExpenseForm';
import ExpenseContainer from './ExpenseContainer';
import { fetchMyExpense } from '../../stores/ExpenseSlice';

function MyExpenseContainer() {
  const expenses = useSelector(({ expense: { expenses } }) => expenses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyExpense());
  }, []);
  return (
    <div style={{ paddingTop: '20px' }}>
      <div style={{ padding: '20px', marginTop: '80px' }}>
        <CreateExpenseForm />
      </div>
      <div class="container ">
        <div class="row hidden-md-up ">
          {expenses.map((item) => (
            <ExpenseContainer key={item.id} expense={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyExpenseContainer;
