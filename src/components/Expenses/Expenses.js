import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import React, { useState } from "react";


function Expenses(props) {
  const [selectYear, setSelectYear] = useState("2019");

  const selectYearHandler = (year) => {
    setSelectYear(year);
  }

  const filterExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString()===selectYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesList item={filterExpenses}></ExpensesList>;
      </Card>
    </div>
  );

}

export default Expenses;
