import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState("")
    const [enteredAmount,setEnteredAmount] = useState("")
    const [enteredDate,setEnteredDate] = useState("")
    // const [enteredValue,setEnteredValue] = useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // })
    const changeTitleHandler = e => {
        setEnteredTitle(e.target.value)
        // setEnteredValue({
        //     ...enteredValue,
        //     enteredTitle:e.target.value
        // })

        // setEnteredValue(prevState =>{
        //     return {
        //         ...prevState,
        //         enteredTitle:e.target.value
        //     }
        // })
    }
    const changeAmountHandler = e => {
        setEnteredAmount(e.target.value)
        // setEnteredValue({
        //     ...enteredValue,
        //     enteredTitle:e.target.value
        // })

        // setEnteredValue(prevState =>{
        //     return {
        //         ...prevState,
        //         enteredAmount:e.target.value
        //     }
        // })
    }
    const changeDateHandler = e => {
        setEnteredDate(e.target.value)
        //  setEnteredValue({
        //     ...enteredValue,
        //     enteredTitle:e.target.value
        // })

        // setEnteredValue(prevState =>{
        //     return {
        //         ...prevState,
        //         enteredDate:e.target.value
        //     }
        // })
    }
    const submitHandler = e =>{ 
            e.preventDefault();
        const ExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(ExpenseData)
        //console.log(ExpenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    const [click, setClick] = useState(false)
    const clickHandler = () => setClick(!click)
    return (
        <div>
        {click ?
            (
                <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} onChange={changeTitleHandler} type="text" />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={changeAmountHandler} type="Number" />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} onChange={changeDateHandler} type="date" min='2021-01-01' max='2022-12-31' />
                </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={clickHandler}>Cancel</button>    
                    <button type='submit'>Add Expense</button>
                </div>
                </form>
            ) 
            :
            (
                <div className='new-expense__actions2'>
            <button onClick={clickHandler}>Add New Expense</button>
        </div>
            )}
        
       
        </div>
    );
}

export default ExpenseForm;