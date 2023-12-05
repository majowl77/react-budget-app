import React, { useState } from 'react'


type Prop={
    setBalanceInput:React.Dispatch<React.SetStateAction<number>>;
    balanceInput: number;
    setSavingInput:React.Dispatch<React.SetStateAction<number>> ;
    savingInput: number;
    setProgressBar: React.Dispatch<React.SetStateAction<number>>;
    progressBar : number;
    setTargetInput:React.Dispatch<React.SetStateAction<number>>;
    targetInput: number
}
export default function Balance(prop:Prop) {
    const [userInput, setUserInput]= useState(0);


    function getSavingInput(event: React.ChangeEvent<HTMLInputElement>){
        setUserInput(Number(event.target.value));
      }

    function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
       event.preventDefault();
       if(userInput <= prop.balanceInput){
        prop.setSavingInput(prop.savingInput + userInput);
        prop.setBalanceInput(prop.balanceInput - userInput);
        const newProgressBar = Math.floor((Number(prop.savingInput + userInput) / prop.targetInput)*100);
        prop.setProgressBar(newProgressBar);
       }else{
        alert("you can't transfer this amount , it's More than you have in your balance ")
       }
      setUserInput(0);
  }
  return (
    <div  className="balanceContainers" >
      <p> Current balance :<span>{prop.balanceInput}</span></p>
      <form onSubmit={onSubmitHandler}>
        <label className="labelText"  htmlFor="transferSaving"> Transfer to saving account </label>
        <input type="number" name="transferSaving" onChange={getSavingInput} value={userInput}></input> <button className='btn'>Transfer</button>
      </form>
    </div>
  )
}

