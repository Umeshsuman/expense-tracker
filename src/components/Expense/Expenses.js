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
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear ;
  })
  //{props.item.filter(data => data.includes(filteredYear))}
    return (
      <div>
        <Card className="expenses ">
        <ExpenseFilter selected={filteredYear} onChangeYear={addChangedYear}/>
    {/*filteredExpenses.length === 0 && <p style={{color:"#fff","text-align":"center"}}>No item Found</p>*/}
        {filteredExpenses.length === 0 ? (<p style={{color:"#fff","text-align":"center"}}>No item Found</p>) :
        (
          filteredExpenses.map((expense)=>{
            return <ExpenseItem
            key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />
          })
        )
      }
        {/*filteredExpenses.map((expense)=>{
            return <ExpenseItem
            key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />
          })*/}
        </Card>
        </div>
    );
}

export default Expenses;