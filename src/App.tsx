import React from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './component/Income';
import Expense from './component/Expense';
import Target from './component/Target'
import Balance from './component/Balance'
function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <Income/>
      <br/>
      <Expense/>
      <Target/>
      <Balance/>
    </div>
  );
}

export default App;
