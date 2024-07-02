import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [vize1,setVize1]=useState(0);
  const [vize2,setVize2]=useState(0);

  const sum=()=>{
    const s=vize1+vize2;
    return avrg(s);
  }

  const avrg=(s)=>{
     return (s/2);
  }

  const show=()=>{
    console.log("ortalama: "+sum());
  }

  return (
    <div>
      <div>
        <input type="number" value={vize1} onChange={(e)=>{setVize1(Number(e.target.value))}}/>
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e)=>{setVize2(Number(e.target.value))}}/>
      </div>
      <div>
        <button onClick={show}>
          ortalama bul
        </button>
      </div>
    </div>
  )
}

export default App
