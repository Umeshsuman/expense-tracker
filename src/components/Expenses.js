import ExpenseItem from './ExpenseItem';
import {expenses} from '../App';
import './Expenses.css'

function Expenses(){
    return (
        <div className="expenses ">
        {expenses.map((expense)=>{
            return <ExpenseItem
            key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />
          })}
        </div>
    );
}

export default Expenses;