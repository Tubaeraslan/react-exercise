import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('tuba');
  const [lastName, setLastName] = useState("eraslan");

  const changed = ()=>{
    setFirstName("ayşe");
  }

  return (
    <div>
      {/* {firstName} {lastName} */}

      {/* <div>{firstName}</div>
      <div>
        <button onClick={() => { setFirstName("ayşe") }}>
          ismi değiştir
        </button>
      </div> */}


      <div>{firstName}</div>
      <div>
        <button onClick={changed}>
          ismi değiştir
        </button>
      </div>
    </div>
  )
}

export default App
