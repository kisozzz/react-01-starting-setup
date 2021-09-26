import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if (props.item.length === 0){
    return <h2 className="expenses-list__fallback"> No items found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
      ))}
    </ul>
  );
};;

export default ExpensesList;
