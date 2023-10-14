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

  function incomeDeleteHandler(keyToDelete:string){
    const deletedItem = incomeList.find((deletedIncome)=> deletedIncome.key === keyToDelete )
    if (deletedItem){
      setBalanceInput(balanceInput - deletedItem.amount);
    }
    setIncomeList(prevIncomeList => prevIncomeList.filter(input => input.key !== keyToDelete));
  }

  function expenseDeleteHandler(keyToDelete:string){
    const deletedItem = expenseList.find((deletedIncome)=> deletedIncome.key === keyToDelete )
    if (deletedItem){
      setBalanceInput(balanceInput + deletedItem.amount);
    }
    setExpenseList(prevExpenseList => prevExpenseList.filter(input => input.key !== keyToDelete));
  }


  console.log("the elements ",incomeList )

  return (
    <div className="App">
      <Income deleteHandler={incomeDeleteHandler} setIncomeList={setIncomeList} incomeList={incomeList} balanceInput={balanceInput} setBalanceInput={setBalanceInput} />
      <Expense deleteHandler={expenseDeleteHandler} setExpenseList={setExpenseList} expenseList={expenseList} balanceInput={balanceInput} setBalanceInput={setBalanceInput} />
      <Target targetInput={targetInput} setTargetInput={setTargetInput} savingInput={savingInput} progressBar={progressBar} setProgressBar={setProgressBar} />
      <Balance targetInput={targetInput} setTargetInput={setTargetInput} balanceInput={balanceInput} setBalanceInput={setBalanceInput} setSavingInput={setSavingInput} savingInput={savingInput} progressBar={progressBar} setProgressBar={setProgressBar} />
      <div> 
      </div>
    </div>
  );
}

export default App;
