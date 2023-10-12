import React, { useState } from 'react'

export default function target() {
  const [userInput,setUserInput]= useState({target:0, currentSaving:"", progress:0});
  const [targetInput, setTargetInput]= useState({target:0, currentSaving:"", progress:0});

  function getUserInput(event: React.ChangeEvent<HTMLInputElement>){
    setUserInput({...userInput, target:Number(event.target.value)});
  }

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setTargetInput({...targetInput, target: userInput.target});
    setUserInput({...userInput, target:0});
  }
  
  return (
    <div className="targetContainer">
        <form className="balanceContainers" onSubmit={onSubmitHandler}>
             <label className="labelText"> Set Target:<input 
             type="number" 
             id="input"
             name='setTarget'
             onChange={getUserInput}
             value={userInput.target}></input></label>
             <button className='btn' type='submit'> Reset </button>
        </form> 
        <p> Current Saving: <span>0</span></p>
        <p>Target: <span>{targetInput.target}</span></p>
        <p> progress: <span>0%</span><progress value = "0" max = "0"/> </p>

    </div>
  )
}
