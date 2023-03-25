import React, {useState} from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card'
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
    <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Chang Title</button>
    </Card>
    );
}
export default ExpenseItem;