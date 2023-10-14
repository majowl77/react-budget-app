import React, {useState} from 'react'

type IncomeObject ={
  incomeSource:string,
  amount:number,
  dateOfIncome:Date,
  key:string
}
type Prop ={
  setIncomeList: React.Dispatch<React.SetStateAction<IncomeObject[]>>;
  incomeList:IncomeObject[];
  setBalanceInput:React.Dispatch<React.SetStateAction<number>>;
  balanceInput: number;
}

export default function Income(prop: Prop) {
  const [income, setIncome]= useState({incomeSource:"", amount:0, dateOfIncome:new Date(),key:crypto.randomUUID() });

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
  function deleteHandler(keyToDelete:string){
    const updatedIncomeList = prop.incomeList.filter(input => input.key !== keyToDelete);
    prop.setIncomeList(updatedIncomeList);
  }



  function onSubmitHandler(event : React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    prop.setIncomeList([...prop.incomeList, income ])
    let amountIncome= income.amount;
    prop.setBalanceInput(prop.balanceInput + amountIncome);
    setIncome({ ...income, incomeSource:"", amount:0 })

    // console.log(prop.incomeList.map((input)=> input));

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
        value={income.incomeSource}>
          </input> 
        <label className="labelText"  htmlFor="amountOfIncome" > Amount of income: </label>
        <input 
        type="number" 
        placeholder="Amount of income"
        name= "amountOfIncome"
        onChange={setIncomeAmount}
        value={income.amount} >
        </input>
        <label className="labelText" htmlFor="dateOfIncome" > Date of income: </label>
        <input 
        type="date"
        placeholder="Date of income"
        name= "dateOfIncome" 
        onChange={setIncomeDate}>
        </input>
        <button className='btn' type='submit'> Add income</button>
      </form>
      </div>
      <div className="NewValues">
        {prop.incomeList.map((input)=> { return ( <ul>      
        <li key={input.key}> {input.incomeSource} : {input.amount}EUR  on  {input.dateOfIncome.toDateString()}
         <button onClick={() => deleteHandler(input.key)} >Delete</button></li> 
      </ul>)})}
      </div>
    </div>
  );
}
