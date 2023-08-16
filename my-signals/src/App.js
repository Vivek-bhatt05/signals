import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log('useEffect')
  },[count])

  const increment = () => {
    setCount((prev)=> prev+1)
  }
  const decreament = () => {
    setCount((prev)=> prev-1)
  }

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decreament}>Minus</button>
    </div>
  );
}

export default App;
