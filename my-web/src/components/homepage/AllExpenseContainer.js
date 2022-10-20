import React, { useEffect } from 'react';
import CreateExpenseForm from './CreateExpenseForm';
import ExpenseContainer from './ExpenseContainer';
import { fetchAllExpense } from '../../stores/ExpenseSlice';
import { useDispatch, useSelector } from 'react-redux';

function AllExpenseContainer() {
  const expenses = useSelector(({ expense: { expenses } }) => expenses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllExpense());
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

export default AllExpenseContainer;
