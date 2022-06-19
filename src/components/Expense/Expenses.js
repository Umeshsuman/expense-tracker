import {useState} from 'react';
import ExpenseList from './expensesList';
import Card from '../UI/card';
import './Expenses.css'
import ExpenseFilter from '../expenseFilter/expenseFilter';
import ExpenseChart from './ExpenseChart';


function Expenses(props){
  const [filteredYear, setFilteredYear] = useState("2020")
  const addChangedYear = (changedYear) => {
    setFilteredYear(changedYear)
    console.log(changedYear)
  }
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear ;
  })
  
 
    return (
      <div>
        <Card className="expenses ">
        <ExpenseFilter selected={filteredYear} onChangeYear={addChangedYear}/>
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList item={filteredExpenses} />
        </Card>
        </div>
    );
}

export default Expenses;