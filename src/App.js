import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js'

function App() {

  let [count ,setCount]=useState(1);
  let [isMorning , setMorning] = useState(false)


  return (
    <div className={`Box ${isMorning ? 'dayLight':''}`}>
      <h1>Have a Good {isMorning ? 'Morning':'Night'}</h1>

      <Message counter={count}/>
      <br/>
      < button onClick={
        ()=> setCount(count+1)
        }>
          Updated Counter</button>
          <br/>
          <button onClick={()=>setMorning(!isMorning)}>
            Update day status

          </button>
    </div>
  );
}

export default App;
