import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayData } from '../../stores/DisplaySlice';

function Selection() {
  const dispatch = useDispatch();
  const display = useSelector(({ display: { display } }) => display);
  return (
    <ul class="nav nav-tabs tabs-alt justify-content-center border-transparent">
      <li class="nav-item">
        <button
          class={`nav-link  text-black py-4 ${
            display === 'myExpense' ? 'active' : ''
          }`}
          onClick={() => {
            dispatch(setDisplayData('myExpense'));
          }}
        >
          My Expense
        </button>
      </li>
      <li class="nav-item">
        <button
          class={`nav-link text-black py-4 ${
            display === 'otherExpense' ? 'active' : ''
          }`}
          onClick={() => {
            dispatch(setDisplayData('otherExpense'));
          }}
        >
          Other's Expense
        </button>
      </li>
      <li class="nav-item">
        <button
          class={`nav-link text-black  py-4 ${
            display === 'allExpense' ? 'active' : ''
          }`}
          onClick={() => {
            dispatch(setDisplayData('allExpense'));
          }}
        >
          All Expense
        </button>
      </li>
    </ul>
  );
}

export default Selection;
