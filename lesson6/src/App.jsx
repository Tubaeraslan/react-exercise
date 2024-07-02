import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [vize1,setVize1]=useState(0);
  const [vize2,setVize2]=useState(0);

  // const sum=()=>{
  //   const s=vize1+vize2;
  //   return avrg(s);
  // }

  // const avrg=(s)=>{
  //    return (s/2);
  // }

  // const show=()=>{
  //   console.log("ortalama: "+sum());
  // }


  const findAverage=()=>{
    debugger;
    const result = sum()/2; 
    show(result);
  }

  const sum=()=>{
    const s = vize1+vize2;
    debugger;
    return s;
  }

  const show=(x)=>{
    debugger;
    console.log("ortalama: "+x);
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
        <button onClick={findAverage}>
          ortalama bul
        </button>
      </div>
    </div>
  )
}

export default App
