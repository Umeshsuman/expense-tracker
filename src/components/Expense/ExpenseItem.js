import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import './ExpenseItem.css'


const ExpenseItem = (props) => {
    let title = props.title;
    const handleClick = () =>{
            title = "updated";
        console.log(title)
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate
                date={props.date}
            />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div onClick={handleClick} className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;