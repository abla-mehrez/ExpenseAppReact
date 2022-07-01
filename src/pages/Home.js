import { useEffect,useState } from 'react';
import AddExpense from '../components/AddExpense';
import List from'../components/List';

function Home(){
    const expenseList=[];
    const[expenseTab,setExpenseTab]=useState([]);
    useEffect(()=>{
    fetch('https://expense-4de98-default-rtdb.firebaseio.com/Expense.json')
    .then(res =>{
        return res.json()
    })
    .then(data=>{
        for (const key in data) {
            data[key].id=key
            expenseList.push(data[key]);      
            }
            setExpenseTab(expenseList)
           
        })
    },[]);
  
    return (
        <>
            <AddExpense></AddExpense>
            <List listOfExpense={expenseTab}></List>
        </>
    )
}
export default Home