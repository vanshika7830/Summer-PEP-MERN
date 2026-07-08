import { useState } from 'react'
import Hello from './Components/Hello';
import RegistrationForm from './Components/RegistrationForm';
function App() {
  let [count,setCount] = useState(0);

  return (
    <>
    <h2>Counter</h2>
    <button onClick={() => setCount(count-1)}>-</button>
    {count}
    <button onClick={() => setCount(count + 1)}>+</button>
    <Hello />
    <RegistrationForm />
    </>
  )
}
export default App
