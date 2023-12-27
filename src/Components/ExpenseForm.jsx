import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [input, setInput] = useState({
    tittle: "",
    amount: "",
    date: "",
  });

  const inputHandeler = (e) => {
    const { name, value } = e.target;
    setInput((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    // console.log(input);
    props.data(input);

    setInput({ tittle: "", amount: "", date: "" });
  };
  return (
    <>
      <form onSubmit={submitHandeler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Tittle</label>
            <input
              onChange={inputHandeler}
              type="text"
              placeholder="add expense..."
              name="tittle"
              value={input.tittle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              onChange={inputHandeler}
              type="number"
              min={0}
              step={1}
              name="amount"
              value={input.amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={inputHandeler}
              type="date"
              min="2019-01-01"
              max="2025-12-31"
              name="date"
              value={input.date}
            />
          </div>
        </div>
        <button className="new-expense__actions" type="submit">
          Add Expense
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
