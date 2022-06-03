import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import './ExpenseItem.css'
import { useState } from 'react';
const ExpenseItem = (props) => {
<<<<<<< Updated upstream:src/components/Expense/ExpenseItem.js
    const [title, setTitle]  = useState(props.title)
    const clickHandler = () => {
        setTitle("Updated!!")
=======
    let title = props.title;
    const handleClick = () =>{
            title = "updated";
        console.log(title)
>>>>>>> Stashed changes:src/components/ExpenseItem.js
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate
                date={props.date}
            />
            <div className='expense-item__description'>
                <h2>{title}</h2>
<<<<<<< Updated upstream:src/components/Expense/ExpenseItem.js
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>Chnage Title</button>
=======
                <div onClick={handleClick} className='expense-item__price'>${props.amount}</div>
>>>>>>> Stashed changes:src/components/ExpenseItem.js
            </div>
        </Card>
    );
}
export default ExpenseItem;