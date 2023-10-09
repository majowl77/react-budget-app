import React from 'react'

export default function Expense() {
  return (
    <div>
            <form>
        <label> Expense source:</label> <input type="text" ></input> <br/>
        <label> Amount of Expense: </label><input type="text" ></input><br/>
        <label> Date of Expense: </label><input type="date"></input><br/>
        <button> Add Expense</button>
        
      </form>
    </div>
  )
}
