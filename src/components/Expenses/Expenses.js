import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpesnsesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selctFilterHandler = (SelectedYear) => {
    setFilteredYear(SelectedYear);
  };

  const filteredExpense = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSelectChange={selctFilterHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpesnsesList listItem = {filteredExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
