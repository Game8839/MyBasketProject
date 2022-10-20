import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseContainer from './ExpenseContainer';
import { fetchMyExpense } from '../../stores/ExpenseSlice';

import MyExpenseContainer from './MyExpenseContainer';
import OtherExpenseContainer from './OtherExpenseContainer';
import AllExpenseContainer from './AllExpenseContainer';

function HomePageContainer() {
  const expenses = useSelector(({ expense: { expenses } }) => expenses);
  const dispatch = useDispatch();
  const display = useSelector(({ display: { display } }) => display);

  useEffect(() => {
    dispatch(fetchMyExpense());
  }, []);

  console.log(expenses);

  return (
    <>
      {display === 'myExpense' ? (
        <MyExpenseContainer />
      ) : display === 'otherExpense' ? (
        <OtherExpenseContainer />
      ) : (
        <AllExpenseContainer />
      )}
    </>
  );
}

export default HomePageContainer;
