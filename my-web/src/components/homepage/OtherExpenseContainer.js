import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpenseContainer from './ExpenseContainer';
import { fetchOtherExpense } from '../../stores/ExpenseSlice';

function OtherExpenseContainer() {
  const expenses = useSelector(({ expense: { expenses } }) => expenses);
  const display = useSelector(({ display: { display } }) => display);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOtherExpense());
  }, [display]);
  return (
    <div style={{ paddingTop: '20px' }}>
      <div class="container " style={{ marginTop: '80px' }}>
        <div class="row hidden-md-up ">
          {expenses.map((item) => (
            <ExpenseContainer key={item.id} expense={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtherExpenseContainer;
