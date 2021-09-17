import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";


function Expenses(props) {
  const [selectYear, setSelectYear] = useState("2019");

  const selectYearHandler = (year) => {
    setSelectYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectYear}
          onSelectYear={selectYearHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );

}

export default Expenses;
