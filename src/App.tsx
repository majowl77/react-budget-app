import React, {useState} from 'react';
import logo from './logo.svg';
// import './App.css';
import Income from './component/Income';
import Expense from './component/Expense';
import Target from './component/Target'
import Balance from './component/Balance'
function App() {
  const [incomeList,setIncomeList]= useState<{incomeSource:string; amount:number; dateOfIncome:Date}[]>([]);
  const [expenseList,setExpenseList]= useState<{expenseSource:string; amount:number; dateOfExpense:Date}[]>([]);

  return (
    <div className="App">
      <Income setIncomeList={setIncomeList} incomeList={incomeList}/>
      <Expense setExpenseList={setExpenseList}/>
      <Target/>
      <Balance/>

    </div>
  );
}

export default App;
