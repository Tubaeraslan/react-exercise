import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Log from './Log'
import { users } from './Log'
import Hello from './Hello'

function App() {
  
  //rfce kısayol component
  console.log(users);

  return (
   <div>
    {/* <Log/>
    <br />
    <hr />
    <br />
    <Log/> */}

    <Hello/>


   </div>
  )
}

export default App
