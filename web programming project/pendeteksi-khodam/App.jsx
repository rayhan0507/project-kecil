/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [khodamResult, setKhodam] = useState("");

  const khodam = [
    "Ryan Gosling",
    "Icikiwir",
    "Freya Ireng",
    "Farhan Kebab",
    "Nugget Gedagedigedageda'o",
    "Orangkulithitamberbulu635",
    "Topi Malas",
    "bochi ireng",
  ];

  const inputChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (Number(value)) {
      setKhodam("Masukan nama anda terdahulu!");
    } else if (value.length < 3) {
      setKhodam("Masukan username minimal 3 huruf");
    } else {
      const acak = khodam[Math.floor(Math.random() * khodam.length)];
      setKhodam(`${value}! khodam anda adalah ${acak}`);
    }
  };

  return (
    <div className="container font">
      <h1 className="bold white">pendeteksi Khodam</h1>
      <input 
        placeholder="masukan nama asli anda" 
        value={value} 
        onChange={inputChange} 
      /><br/>
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
      {khodamResult && (
        khodamResult.startsWith("Masukan username minimal 3 huruf") ? (
          <p className="ukuran-font">{khodamResult}</p>
        ) : (
          <p className="ukuran-font">{value}! khodam anda adalah <strong className="khodam-color">{khodamResult.split(" adalah ")[1]}</strong></p>
        )
      )}
      <p className="white">reload dulu sebelum menulis nama ulang! ⚠</p>
    </div>
  );
}

export default App; 
