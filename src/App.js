import Expenses from "./components/Expenses/Expenses";


function App() {
  const expenses = [
    {id: 'e1', title: 'Bread', amount: 46, date: new Date(2021, 8, 2)},
    {id: 'e2', title: 'Coffee', amount: 28, date: new Date(2021, 8, 2)},
    {id: 'e3', title: 'Icecream', amount: 40, date: new Date(2021, 8, 2)},
    {id: 'e4', title: 'Eggs', amount: 8, date: new Date(2021, 8, 2)},
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses = {expenses}></Expenses>

    </div>
  );
}

export default App;
