import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('tuba');
  const [lastName, setLastName] = useState("eraslan");
  const [names,setNames]=useState(["tuba","ali","ayşe"]);
  const [userInfo,setUserInfo]=useState({username:"tuba",password:"1234"});
  const [show,setShow]=useState(true);
  const [count,setCount]=useState(0);


  const arttir= ()=>{
    setCount(count+1);
  }
  const azalt=()=>{
    if(count>0){
      setCount(count-1);
    }
  }

  console.log("component render edildi");


  //bir state in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir
  // console.log(names);

  // const changed = ()=>{
  //   debugger;
  //   setFirstName("ayşe");
  // }

  return (
    <div>
      {/* {firstName} {lastName} */}

      {/* <div>{firstName}</div>
      <div>
        <button onClick={() => { setFirstName("ayşe") }}>
          ismi değiştir
        </button>
      </div> */}


      {/* <div>{firstName}</div>
      <div>
        <button onClick={changed}>
          ismi değiştir
        </button>
      </div> */}

      {/* {names.map((name,index)=>(
        <div key={index}>{name}</div>
      ))} */}

      {/* {userInfo.username} {userInfo.password} */}

      {/* {show ? <div>{userInfo.username} {userInfo.password} </div> : 
      <div>"bilgileri gösterme"</div>} */}

      <div>{count}</div>
      <div>
        <button onClick={arttir}>
          Arttır
        </button>
      </div>
      <div>
        <button onClick={azalt}>
          Azalt
        </button>
      </div>



    </div>
  )
}

export default App
