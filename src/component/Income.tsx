import React, {useState} from 'react'

export default function Income() {
  const [income, setIncome]= useState({incomeSource:"", amount:0, dateOfIncome:new Date() });
  const [incomeList,setIncomeList]= useState<{incomeSource:string; amount:number; dateOfIncome:Date}[]>([]);

  function setIncomeSource(event: React.ChangeEvent<HTMLInputElement>){
    console.log("income source",event.target.value);
    setIncome({...income, incomeSource: event.target.value})
    
  }
  function setIncomeAmount(event: React.ChangeEvent<HTMLInputElement>){
    console.log("Amount source",event.target.value);
    setIncome({...income, amount: Number(event.target.value)})
  }
  function setIncomeDate(event: React.ChangeEvent<HTMLInputElement>){
    console.log("date source",event.target.value);
    const dateOfIncome =  new Date (event.target.value);
    setIncome({...income, dateOfIncome:dateOfIncome})
  }

  function onSubmitHandler(event : React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setIncomeList([...incomeList, income ])
    setIncome({ ...income, incomeSource:"", amount:0 })

  }
  return (
    <div className='divContainer'>
      <div> 
      <form className="containers" onSubmit={onSubmitHandler}>
        <label className="labelText"  htmlFor="incomesource"> Income source:</label> 
        <input 
        type="text"
        placeholder="income source"
        name= "amountOfIncome" 
        onChange={setIncomeSource}
        value={income.incomeSource}></input> 
        <label className="labelText"  htmlFor="amountOfIncome" > Amount of income: </label>
        <input 
        type="number" 
        placeholder="Amount of income"
        name= "amountOfIncome"
        onChange={setIncomeAmount}
        value={income.amount} ></input>
        <label className="labelText" htmlFor="dateOfIncome" > Date of income: </label>
        <input 
        type="date"
        placeholder="Date of income"
        name= "dateOfIncome" 
        onChange={setIncomeDate}
       ></input>
        <button className='btn'> Add income</button>
      </form>
      </div>
      <div className="NewValues">
      {incomeList.map((input)=> { return ( <div>      
        <p> {input.incomeSource} : {input.amount}EUR  on  {input.dateOfIncome.toDateString()}</p> 
      </div>)})}
      </div>
    </div>
  );
}
