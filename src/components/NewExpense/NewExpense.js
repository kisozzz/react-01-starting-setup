import React from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }

  return (
  <div className="new-expense">
    <ExpenseForm onSaveExpeneData={saveExpenseDataHandler}></ExpenseForm>
  </div>
  );
};

export default NewExpense;
