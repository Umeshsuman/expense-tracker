import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = () =>{
    const saveExpenseDataHandeler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(ExpenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler} />
        </div>
    );
}

export default NewExpense;