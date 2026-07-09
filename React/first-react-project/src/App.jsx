import { useState,useEffect } from 'react'
import Hello from './Components/Hello';
import RegistrationForm from './Components/RegistrationForm';
function App() {
  let [count,setCount] = useState(0);
  console.log("Outside Use effect");
  
  useEffect(() => {
  console.log("Inside use Effect");
}, []);

  return (
    <>
    <h2>Counter</h2>
    <button onClick={() => setCount(count-1)}>-</button>
    {count}
    <button onClick={() => setCount(count + 1)}>+</button>
    <Hello />
    <RegistrationForm />
    <Greet name = "John"/>

    
    </>
  )
}
export default App

function Greet(prop){
  return(
    <p>Good Morning {prop.name}</p>
  )
}