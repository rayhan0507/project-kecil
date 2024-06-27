/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';


function App() {
  const [nomor, setNomor] = useState("");

  const handleClick = (e) => {
    setNomor(e.target.value)
  }

  let response;
  if (nomor % 2 === 1){
    response = "ganjil";
  } else {
    response = "genap";
  }

  return (
    <div>
      <h1>pendeteksi ganjil genap</h1>
      <p>nomor {nomor} adalah <strong>{response}</strong></p>
      <input value={nomor} placeholder='masukan angka' onChange={handleClick}/>
    </div>
  )
}

export default App
