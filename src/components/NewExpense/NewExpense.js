import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const buttonHandler = ()=> {
        setIsEditing(true);
    }

    const stopEditing = () =>{
        setIsEditing(false);
    }
    
    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={buttonHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onStopEditing={stopEditing} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;