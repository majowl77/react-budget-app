import React from 'react'

export default function Income() {
  return (
    <div>
      <form>
        <label> Income source:</label> <input type="text" ></input> <br/>

        <label> Amount of income: </label><input type="text" ></input><br/>
        <label> Date of income: </label><input type="date"></input><br/>
        <button> Add income</button>
        
      </form>
    </div>
  );
}
