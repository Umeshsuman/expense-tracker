import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) =>{
    const saveExpenseDataHandeler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()*10
        }
        //console.log(ExpenseData)
        props.onAddExpense(ExpenseData)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler} />
        </div>
    );
}

export default NewExpense;