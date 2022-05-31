// import React from 'react';

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


const ExpensesList = (props) => {

    if(props.listItem.length === 0){
      return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }
    

    return (
    <ul className="expenses-list">
        {props.listItem.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
    ))}
    </ul>
    )
};

export default ExpensesList;