import React, {useState} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  };
  const hideFormHandler = () => {
    setIsEditing(false)
  };

  return (
  <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm onSaveExpeneData={saveExpenseDataHandler} onCancel={hideFormHandler}></ExpenseForm>}
  </div>
  );
};

export default NewExpense;
