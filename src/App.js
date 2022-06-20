import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummy_expenses = [
  {
    id: 'e1',
    title: 'Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 79.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 894.67,
    date: new Date(2020, 3, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 4, 12),
  },
  {
    id: 'e5',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e6',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 6, 12),
  },
  {
    id: 'e7',
    title: 'Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e8', title: 'New TV', amount: 799.49, date: new Date(2021, 8, 12) },
  {
    id: 'e9',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 9, 28),
  },
  {
    id: 'e10',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 2, 12),
  },
  {
    id: 'e11',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 3, 12),
  },
  {
    id: 'e12',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
  {
    id: 'e13',
    title: 'Paper',
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: 'e14', title: 'New TV', amount: 799.49, date: new Date(2019, 8, 12) },
  {
    id: 'e15',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2019, 10, 28),
  },
  {
    id: 'e16',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e17',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 8, 12),
  },
  {
    id: 'e18',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 1, 12),
  },
  {
    id: 'e19',
    title: 'Paper',
    amount: 94.12,
    date: new Date(2022, 12, 14),
  },
  { id: 'e20', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e21',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e22',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e23',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 1, 12),
  },
  {
    id: 'e24',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 1, 12),
  },
];



function App() {
  const [expenses, setExpenses] = useState(dummy_expenses)
  const addExpenseHandeler = expense =>{
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
