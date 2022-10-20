import React from 'react';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Avatar from '../Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { handleDeleteExpense } from '../../stores/ExpenseSlice';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

function ExpenseContainer({ expense }) {
  const dispatch = useDispatch();
  const user = useSelector(({ auth: { user } }) => user);

  const handleClickDelete = () => {
    console.log(expense.id);
    dispatch(handleDeleteExpense(expense.id));
  };
  return (
    <div
      class={`forum-item active ${
        expense.type === 'income' ? 'bg-success' : 'bg-danger'
      } bg-opacity-10`}
    >
      <div class="row">
        <div class="col-md-7">
          <div class="forum-icon">
            <Avatar src={expense.User.profileImage} size="40" />
            <div class="forum-sub-title">
              {expense.User.firstName} {expense.User.lastName}
            </div>
          </div>
          <div class="font-weight-bold">{expense.title}</div>
          <div class="forum-sub-title">{expense.description}</div>
        </div>
        <div class="col-md-1 forum-info">
          <span class="views-number">{expense.type}</span>
          <div>
            <small>TYPE</small>
          </div>
        </div>
        <div class="col-md-1 forum-info">
          <span class="views-number">{expense.amount}</span>
          <div>
            <small>Bath</small>
          </div>
        </div>
        <div class="col-md-1 forum-info ">
          <span class="views-number">
            {timeAgo.format(
              new Date(expense.createdAt) - 30 * 1000,
              'mini-now'
            )}
          </span>
          <div>
            <small>Timeago</small>
          </div>
        </div>
        {expense.User.id === user.id ? (
          <div class="col-md-1 forum-info align-middle">
            <button onClick={handleClickDelete}>
              <i class="bi bi-trash"></i>
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default ExpenseContainer;
