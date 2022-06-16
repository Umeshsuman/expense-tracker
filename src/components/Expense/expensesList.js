import React from "react";
import ExpenseItem from "./ExpenseItem";
import './expensesList.css';


const ExpenseList = (props) => {

    //let expenseContent = <p>No item found!!</p>
    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback">No item found!!</h2>
    }

    return (
        <ul className="expenses-list">
            {props.item.map((expense)=>{
        return <ExpenseItem
        key={expense.id}
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
        />
      })}

        {/*filteredExpenses.length === 0 && <p style={{color:"#fff","text-align":"center"}}>No item Found</p>*/}
        {/*filteredExpenses.length === 0 ? (<p style={{color:"#fff","text-align":"center"}}>No item Found</p>) :
        (
          filteredExpenses.map((expense)=>{
            return <ExpenseItem
            key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />
          })
        )*/
    }
      {/*filteredExpenses.map((expense)=>{
          return <ExpenseItem
          key={expense.id}
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
          />
        })*/}
        </ul>);
      
    
}

export default ExpenseList;