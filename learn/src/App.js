import './App.css';
import {useState,useEffect} from 'react';

function App() {

  const [count,setCount] = useState(0); // [state, setState] = useState(intialState)

  useEffect(()=>{     // useEffect() is uesed to do something when an state changes / when the component is rendereed
    alert("Count is changed!");
  },[count])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)} >Add</button>
    </div>
  );
}

export default App;
