import React, {useState , useEffect} from 'react';
import logo from './logo.svg';
// import './App.css';
import Income from './component/Income';
import Expense from './component/Expense';
import Target from './component/Target'
import Balance from './component/Balance'
function App() {
  const [incomeList,setIncomeList]= useState<{incomeSource:string; amount:number; dateOfIncome:Date, key:string }[]>([]);
  const [expenseList,setExpenseList]= useState<{expenseSource:string; amount:number; dateOfExpense:Date, key:string}[]>([]);
  const [savingInput,setSavingInput]= useState(0);
  const [balanceInput,setBalanceInput]= useState(0);
  const [progressBar, setProgressBar]= useState(0);
  const [targetInput, setTargetInput]= useState(0);

  // const [progressTargetSaving, setProgressTargetSaving]= useState<{ savingInput:number; progressBar:number ; targetSaving:number }>()
  // const initialValue= 0;



  return (
    <div className="App">
      <Income setIncomeList={setIncomeList} incomeList={incomeList} balanceInput={balanceInput} setBalanceInput={setBalanceInput} />
      <Expense setExpenseList={setExpenseList} expenseList={expenseList} balanceInput={balanceInput} setBalanceInput={setBalanceInput} />
      <Target targetInput={targetInput} setTargetInput={setTargetInput} savingInput={savingInput} progressBar={progressBar} setProgressBar={setProgressBar} />
      <Balance targetInput={targetInput} setTargetInput={setTargetInput} balanceInput={balanceInput} setBalanceInput={setBalanceInput} setSavingInput={setSavingInput} savingInput={savingInput} progressBar={progressBar} setProgressBar={setProgressBar} />
      <div> 
        <h2>Results </h2>

      </div>
    </div>
  );
}

export default App;
