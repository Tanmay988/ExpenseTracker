import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveData = (enteredData) => {
    const expenses = {
      ...enteredData,
      id: Math.floor(Math.random()).toString(),
    };
    // console.log(expenses);
    props.dataExpense(expenses);
  };
  return (
    <>
      <div className="new-expense">
        <ExpenseForm data={saveData} />
      </div>
    </>
  );
};

export default NewExpense;
