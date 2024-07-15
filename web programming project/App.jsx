/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { TfiReload } from "react-icons/tfi";

const App = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [digit, setDigit] = useState("");

  function handleClick() {
    if (value.length < 8) {
      setDigit("masukan minimal 8 digit");
   } else {
      setDigit("");
      console.log(`Username ${value}`)
      console.log(`Password :${password}`)
   }
  }

  function reloadClick() {
    setValue("");
    setPassword("");
  }

  function handleUsername(event) {
    setValue(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return(
    <div className='container'>
      <button className='button-reload' onClick={reloadClick}>
        <TfiReload className='icon-reload'/>
      </button>
      <h1 className='font'>Login</h1>
      <input type='text' className='input font-style' placeholder='Username' value={value} onChange={handleUsername}/><br/>
      <input type='password' className='input font-style' placeholder='Password' value={password} onChange={handlePassword}/><br/>
      <button className='button font-style' onClick={handleClick}>Login</button>
      {digit && <p className='digit font-style'>{digit}</p>}
    </div>
  );
}

export default App
