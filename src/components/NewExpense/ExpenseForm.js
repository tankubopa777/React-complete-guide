import React from "react";

import './ExpenseForm.css';

const ExpenseForm = () =>{
    // document.getElementById('').addEventListener('click', () => {})

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    } ;
    return (
        <form>
            <div className="new-expense__controls">
                <div>
                    <label className="new-expense__label">Title</label>
                    <input type = 'text' onChange={titleChangeHandler}/>
                </div>
                <div >
                    <label className="new-expense__label">Amount</label>
                    <input type = 'number' min='0.01' step='0.01'/>
                </div>
                <div className="new-expense__control">
                    <label className="new-expense__label">Date</label>
                    <input type = 'date' min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type = 'submit' >Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;