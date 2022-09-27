import logo from './img/1.png';
import React, { useState } from 'react';
import './App.css';
import './style/main.css';

function App() {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num+1);
  }

  const reduce = () => {
    setNum(num-1);
  }
  return (
    <div className="App">
      <div className='setNum'>
        <input type='button' className='minuse-btn' onClick={reduce} />
        <p style={{fontSize:'52px', color:'white', margin:'0'}}>{num}</p>
        <input type='button' className='plus-btn' onClick={increase}/>
      </div>
      <input type='button' className='disconnect' />
      <img src={logo} className='main-image' />
    </div>
  );
}

export default App;
