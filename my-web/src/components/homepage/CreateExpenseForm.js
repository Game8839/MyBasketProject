import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCreateExpenseData } from '../../stores/CreateExpenseSlice';
import { handleCreateExpense } from '../../stores/ExpenseSlice';
function CreateExpenseForm() {
  const createExpense = useSelector(
    ({ createExpenses: { createExpenses } }) => createExpenses
  );
  const dispatch = useDispatch();

  console.log(createExpense);
  const handleChangeInput = (e) => {
    dispatch(
      setCreateExpenseData({ name: e.target.name, value: e.target.value })
    );
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      dispatch(handleCreateExpense(createExpense));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="d-flex justify-content-around"
      style={{ spaceBetween: '15px' }}
      onSubmit={handleSubmitForm}
    >
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          value={createExpense.title}
          onChange={handleChangeInput}
          placeholder="Enter Expense Title"
        />
        {createExpense.title === '' || createExpense.title.trim() === '' ? (
          <small id="emailHelp" class="form-text text-muted">
            Please enter the title
          </small>
        ) : (
          ''
        )}
      </div>
      <div class="form-group" style={{ width: '40%' }}>
        <label for="title">Description:</label>
        <input
          type="text"
          class="form-control"
          id="description"
          name="description"
          value={createExpense.description}
          onChange={handleChangeInput}
          placeholder="Enter your Expense description(Optional)"
        />
      </div>
      <div className="align-self-center d-flex">
        <select
          class="custom-select form-group"
          id="inputGroupSelect"
          name="type"
          value={createExpense.type}
          onChange={handleChangeInput}
          defaultValue="income"
        >
          <option selected>Select type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          class="form-control"
          id="amount"
          name="amount"
          value={createExpense.amount}
          onChange={handleChangeInput}
          placeholder="Enter Expense Amount"
        />
      </div>

      <div className="align-self-center">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateExpenseForm;
