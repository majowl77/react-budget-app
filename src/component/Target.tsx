import React from 'react'

export default function target() {
  return (
    <div>
        <form>
             <label> Set Target:<input type="text" id="input"></input></label>
             <button> Reset </button>
             <p>Current Saving: <span>0</span></p>
             <p>Target: <span>0</span></p>
             <p> progress: <span>0%</span><progress value = "0" max = "0"/> </p>

        </form> 
    </div>
  )
}
