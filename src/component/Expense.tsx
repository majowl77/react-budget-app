import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

type ExpenseObject ={
  expenseSource:string,
  amount:number,
  dateOfExpense:Date,
  key:string;
  }
type Prop={
  setExpenseList:  React.Dispatch<React.SetStateAction<{expenseSource: string,  amount: number, dateOfExpense: Date,  key:string; }[]>>;
  expenseList: ExpenseObject[];
  setBalanceInput:React.Dispatch<React.SetStateAction<number>>;
  balanceInput: number;
  deleteHandler:(keyToDelete: string)=> void;
}
export default function Expense(prop: Prop) {

  const [expense, setExpense]= useState({expenseSource:"", amount:0, dateOfExpense:new Date() ,key:uuidv4()});

  function getExpenseSource(event: React.ChangeEvent<HTMLInputElement>){
    console.log("income source",event.target.value);
    setExpense({...expense, expenseSource: event.target.value})

  }
  function getExpenseAmount(event: React.ChangeEvent<HTMLInputElement>){
    console.log("Amount source",event.target.value);
    setExpense({...expense, amount: Number(event.target.value)})
  }
  function getExpenseDate(event: React.ChangeEvent<HTMLInputElement>){
    console.log("date source",event.target.value);
    const dateOfExpense =  new Date (event.target.value);
    setExpense({...expense, dateOfExpense:dateOfExpense})
  }

  function onSubmitHandler(event : React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    const uniqueKey = uuidv4();
    const newExpenseItem = {...expense, key: uniqueKey };
    prop.setExpenseList([...prop.expenseList, newExpenseItem ])
    
    let amountExpense= expense.amount;
    prop.setBalanceInput(prop.balanceInput - amountExpense);
    setExpense({ ...expense, expenseSource:"", amount:0 })

  }
  return (
    <div className='divContainer'>
      <div> 
       <form className="containers" onSubmit={onSubmitHandler}>
        <label className="labelText"  htmlFor="expenseSource"> Expense source:</label> 
        <input  type="text" placeholder=" Expense source" name= "expenseSource" onChange={getExpenseSource}value={expense.expenseSource}></input> 

        <label className="labelText"  htmlFor="amountOfExpense" > Amount of Expense: </label>
        <input  type="text"  placeholder="Amount of Expense" name= "amountOfExpense"  onChange={getExpenseAmount} value={expense.amount}></input>

        <label className="labelText" htmlFor="dateOfExpense" >  Date of Expense: </label>
        <input  type="date" placeholder="Date of Expense" name= "dateOfExpense"  onChange={getExpenseDate} required></input>
        <button className='btn'> Add Expense</button>

      </form>
      </div>
      <div className="NewValues">
      {prop.expenseList.map((input)=> { return ( <ul>      
        <li key={input.key}> {input.expenseSource} : {input.amount}EUR  on  {input.dateOfExpense.toDateString()}
        <button onClick={() => prop.deleteHandler(input.key)} >Delete</button> </li> 
      </ul>)})}
      </div>

    </div>
  )
}
