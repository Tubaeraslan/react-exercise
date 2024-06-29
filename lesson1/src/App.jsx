import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //jsx{}
  //js kodları
  let a = 15;
  const firstName = "Tuba";

  let vize1 = 60;
  let vize2 = 20;

  let sonuc = false;

  let names = ["Tuba","Enes","Ayşe","Kübra","Adem"];
  return (
    //html kodları
    <div>
      {/* <p>a değişkeninin değeri : {a}</p>
      <p>ad : {firstName}</p> */}


      {/* <p>Ortalama: {(vize1+vize2)/2}</p> */}
      {/* {sonuc ? <p>Ehliyet alabilirsin</p> : <p>Ehliyet alamazsın</p>} */}

      {/* {
        (vize1+vize2)/2 >= 50 ? <p>Dersten geçtin</p> : <p>Dersten kaldın</p>
      } */}

      {/* {
        names.map((name,index)=>(
           <div key={index} style={{
            backgroundColor:"orange",
            border:"1px solid black"
           }}>
            {name}
           </div>
        ))
      } */}

      
    </div>
  )
}

export default App
