/* eslint-disable no-unused-vars */
import { React, useState } from "react";

const App = () => {
   const [value, setValue] = useState("");
   const [khodamResult, setKhodam] = useState("");

   const khodam = ["ryan gosling"]

   
   const inputChange = (event) => {
    setValue(event.target.value);
   }

   const handleClick = () => {
    if (value) {
      const acak = khodam[Math.floor(Math.random() * khodam.length)];
      setKhodam(acak);
    } else {
      setKhodam(`Masukan nama anda terdahulu! `)
    }
   };
   
   return(
    <div className="container font">
      <h1 className="bold white">pendeteksi Khodam</h1>
      <input placeholder="masukan nama asli anda" value={value} onChange={inputChange}/><br/>
      <select className="font">
        <option>januari</option>
        <option>februari</option>
        <option>maret</option>
        <option>april</option>
        <option>mei</option>
        <option>juni</option>
        <option>juli</option>
        <option>agustus</option>
        <option>september</option>
        <option>oktober</option>
        <option>november</option>
        <option>desember</option>
      </select>
      <button onClick={handleClick} className="font">submit</button>
      {khodamResult && <p className="ukuran-font">{value}! khodam anda adalah <strong className="khodam-color">{khodamResult}</strong></p>}
      <p className="white">reload dulu sebelum menulis nama ulang! ⚠</p>
    </div>
   )
}

export default App