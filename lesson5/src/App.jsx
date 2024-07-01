import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  
  useEffect(()=>{
    console.log("her zaman çalışır");
  })

  useEffect(()=>{
    console.log("ilk render edildiğinde çalışır");
  },[])

  useEffect(()=>{
    console.log("ilk render edildiğnde ve FİRSTNAME veya LASTNAME değeri değiştiğinde çalışır")
  },[firstName,lastName])

  // useEffect(()=>{
  //   console.log("ilk render edildiğnde ve LASTNAME değeri değiştiğinde çalışır")
  // },[lastName])

  return (
    <div>
      <div><button onClick={()=>setFirstName("tuba")}>Ad değiştir</button></div>
      <div><button onClick={()=>setLastName("eraslan")}>Soyad değiştir</button></div>
    </div>
  )
}

export default App
