import React from 'react'

export default function Balance() {
  return (
    <div>
      <form>
        <p> Current balance :<span> 0</span></p>
        <label> Transfer to saving account </label><br/>
        <input type="text" ></input> <button>Transfer</button>
      </form>
    </div>
  )
}
