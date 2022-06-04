import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
<<<<<<< Updated upstream
    //const [enteredTitle,setEnteredTitle] = useState("")
    //const [enteredAmount,setEnteredAmount] = useState("")
    //const [enteredDate,setEnteredDate] = useState("")
    const [enteredValue,setEnteredValue] = useState({
        enteredTitle:"",
        enteredAmount:"",
        enteredDate:""
    })
    const changeTitleHandler = e => {
        // setEnteredValue({
        //     ...enteredValue,
        //     enteredTitle:e.target.value
        // })
        setEnteredValue(prevState =>{
            return {
                ...prevState,
                enteredTitle:e.target.value
            }
        })
    }
    const changeAmountHandler = e => {
        setEnteredValue(prevState =>{
            return {
                ...prevState,
                enteredAmount:e.target.value
            }
        })
    }
    const changeDateHandler = e => {
        setEnteredValue(prevState =>{
            return {
                ...prevState,
                enteredDate:e.target.value
            }
        })
    }
    const submitHandler = e =>{ 
        e.preventDefault();
        const ExpenseData = {
            title: enteredValue.enteredTitle,
            amount: enteredValue.enteredAmount,
            date:new Date(enteredValue.enteredDate)
        }
        console.log(ExpenseData)
=======
    const titleChangeHandeler = (e) => {
        console.log(e.target.value)
>>>>>>> Stashed changes
    }
    return (
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
<<<<<<< Updated upstream
            <input onChange={changeTitleHandler} type="text" />
=======
            <input type="text" onChange={titleChangeHandeler} />
>>>>>>> Stashed changes
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input onChange={changeAmountHandler} type="Number" min='0.01' set='0.01' />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input onChange={changeDateHandler} type="date" min='2021-01-01' max='2022-12-31' />
        </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
        </form>
    );
}

export default ExpenseForm;