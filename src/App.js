import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {id: 'e1', title: 'Bread', amount: 46, date: new Date(2021, 8, 2)},
  {id: 'e2', title: 'Coffee', amount: 28, date: new Date(2021, 8, 2)},
  {id: 'e3', title: 'Icecream', amount: 40, date: new Date(2021, 8, 2)},
  {id: 'e4', title: 'Eggs', amount: 8, date: new Date(2021, 8, 2)},
]
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses)
  const addExpenseHandler = (newExpense) => {
    setExpenses((preExpenses) => {
      return [newExpense, ...preExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses = {expenses}></Expenses>

    </div>
  );
}

export default App;
