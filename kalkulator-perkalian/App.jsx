/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [multiply, setMultiply] = useState(null);

  useEffect(()=>{
    if (multiply == null){
      setMultiply(first*second);
    }
  })

  return(
    <div className='body'>
      <div className='container font'>
        <h1>Kalkulator perkalian</h1>
        <p>hasil nya adalah {multiply}</p>
        <input placeholder='masukan angka pertama:' value={first} type='number' onChange={(e)=>{setFirst(e.target.value)
          setMultiply(null);
        }}/>
        <input placeholder='masukan angka kedua:' value={second} type='number' onChange={(e) => {setSecond(e.target.value)
          setMultiply(null);
        }}/>
      </div>
    </div>
  )

}
export default App;
