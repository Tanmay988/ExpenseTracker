import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const mnth = new Date(props.date);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    mnth
  );
  const day = new Date(props.date);
  const year = new Date(props.date);

  return (
    <>
      <div className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year.getFullYear()}</div>
          <div className="expense-date__day">{day.getDate()}</div>
        </div>

        <div className="expense-item__description">
          <h2>{props.tittle}</h2>
          <div className="expense-item__price">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {props.amount}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
