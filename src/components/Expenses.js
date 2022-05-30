import ExpenseItem from './ExpenseItem';
import {expenses} from '../App';
import Card from './card';
import './Expenses.css'

function Expenses(){
    return (
        <Card className="expenses ">
        {expenses.map((expense)=>{
            return <ExpenseItem
            key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />
          })}
        </Card>
    );
}

export default Expenses;