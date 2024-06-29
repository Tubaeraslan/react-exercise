import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //jsx{}
  //js kodları

  let a = 15;
  const firstName = "tuba";

  let vize1 = 60;
  let vize2 = 20;
  let ort = (vize1 + vize2) / 2;

  let isimler = ["tuba", "ali", "ahmet", "ayşe"];

  return (
    //html kodları
    <div>
      {/* <p>a değişkeni: {a}</p>
      <p>müşterinin adı: {firstName}</p> */}

      {/* <p>ortalama: {(vize1+vize2)/2}</p> */}

      {/* {ort>=50 ? <p>gectin</p> : <p>kaldın</p>} */}

      {
        // (vize1+vize2)/2 >=50 ? <p>gectin</p> : <p>kaldın</p>
      }

      {
        isimler.map((isim, index) => (
          <div key={index} style={{
            backgroundColor: 'orange',
            color: 'red',
            border: '1px solid black'
          }}>
            {isim}
          </div>
        ))
      }
    </div>
  )
}

export default App
