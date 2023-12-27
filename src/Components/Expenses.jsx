import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    const year = new Date(expense.date).getFullYear();
    return year.toString() === filteredYear;
  });

  let expensesContent = (
    <p style={{ color: "#fff", textAlign: "center" }}>No expenses found.</p>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        tittle={expense.tittle}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {expensesContent}
      </div>
    </>
  );
};

export default Expenses;
