import React, { useState } from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense";

const Dummy = [
  {
    id: "e2",
    tittle: "buy books",
    amount: 100,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e6",
    tittle: "buy oranges",
    amount: 50,
    date: new Date(),
  },
];

export const App = () => {
  const [expense, setExpense] = useState(Dummy);

  const inputData = (item) => {
    console.log(item);
    setExpense((preVal) => {
      return [item, ...preVal];
    });
  };

  return (
    <>
      <NewExpense dataExpense={inputData} />
      <Expenses item={expense} />
    </>
  );
};

export default App;
