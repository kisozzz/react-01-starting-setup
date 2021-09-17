import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {id: 'e1', title: 'Bread', amount: 46, date: new Date(2021, 8, 2)},
    {id: 'e2', title: 'Coffee', amount: 28, date: new Date(2021, 8, 2)},
    {id: 'e3', title: 'Icecream', amount: 40, date: new Date(2021, 8, 2)},
    {id: 'e4', title: 'Eggs', amount: 8, date: new Date(2021, 8, 2)},
  ]

  const addExpenseHandler = (newExpense) => {
    console.log('expense in app.js');
    console.log(newExpense);
    expenses.push(newExpense)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses = {expenses}></Expenses>

    </div>
  );
}

export default App;
