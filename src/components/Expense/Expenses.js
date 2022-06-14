import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/card';
import './Expenses.css'
import ExpenseFilter from '../expenseFilter/expenseFilter';


function Expenses(props){
  const [filteredYear, setFilteredYear] = useState("2020")
  const addChangedYear = (changedYear) => {
    setFilteredYear(changedYear)
    console.log(changedYear)
  }
    return (
      <div>
        <Card className="expenses ">
        <ExpenseFilter selected={filteredYear} onChangeYear={addChangedYear}/>
        {props.item.map((expense)=>{
            return <ExpenseItem
            key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />
          })}
        </Card>
        </div>
    );
}

export default Expenses;