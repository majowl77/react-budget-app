import React, { useState } from 'react'

type Prop = {
  setProgressBar: React.Dispatch<React.SetStateAction<number>>;
  progressBar : number;
  savingInput: number 
  setTargetInput:React.Dispatch<React.SetStateAction<number>>;
  targetInput: number
}
export default function target(prop:Prop) {

  function getTargetInput(event: React.ChangeEvent<HTMLInputElement>){
    prop.setTargetInput(Number(event.target.value));
    const newProgressBar = Math.floor((Number(prop.savingInput) / prop.targetInput)*10);
    prop.setProgressBar(newProgressBar);
    console.log( "this newProgressBar value", newProgressBar);


  }


  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    prop.setTargetInput( 0);
    prop.setProgressBar(0)
  }

  return (
    <div className="targetContainer">
        <form className="balanceContainers" onSubmit={onSubmitHandler}>
             <label className="labelText" htmlFor='setTarget'> Set Target:
             <input 
             type="text" 
             id="input"
             name='setTarget'
             onChange={getTargetInput}
             value={prop.targetInput}></input></label>
             <button className='btn' type='submit'> Reset </button>
        </form> 
        <p> Current Saving: <span>{prop.savingInput.toString()}</span></p>
        <p>Target: <span>{prop.targetInput}</span></p>
        <p> progress: <span>{prop.progressBar}%</span><progress value ={prop.progressBar} max ={prop.targetInput}/> </p>

    </div>
  )
}
