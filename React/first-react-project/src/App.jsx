import { useState,useEffect, useRef,useMemo } from 'react'
import Hello from './Components/Hello';
import Child from './Components/Child';
import GrandParent from './Components/GrandParent';
import RegistrationForm from './Components/RegistrationForm';
function App() {
  let [count,setCount] = useState(0);
//   console.log("Outside Use effect");
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);
//   useEffect(() => {
//   console.log("Inside use Effect");
// }, []);

  function handleChange(e){
    const imageURL = URL.createObjectURL(e.target.files[0]);
    setImage(imageURL)
  }
  function removeImage(){
    setImage(null);
    console.log("inside image ip before" ,imageRef.current.value);
    imageRef.current.value = "";
    console.log("inside image ip after" ,imageRef.current.value);
  }

  function calculatingSum(num){
    console.log("Calculatingg...");
    let result = 1;
    for(let i = 0;i<10;i++){
      result *= num*2;
    }
    return result
  }

  // const result = calculatingSum(4);
  const result = useMemo(() => calculatingSum(4), []);
  return (
    <>
    <p>Result: {result}</p>
     <h2>Counter</h2>
    <button onClick={() => setCount(count-1)}>-</button>
    {count}
    <button onClick={() => setCount(count + 1)}>+</button> <br /> <br />
    {/* <GrandParent name = "Vanshika"/> */}
    <GrandParent />
    {/* <Hello />
    <RegistrationForm />
    <Greet name = "John"/> 
    <p>Hello World</p> */}

    {/* <input type="file" accept='image/jpg, image/png' ref={imageRef} onChange={handleChange}/>
    {image && <img src={image} alt="Preview" />}
    <button onClick={removeImage}>Remove Image</button> */}

    {/* <Child name = "Vanshika"/>   Will not rerender when count changes bcz its prop is not changing*/}
     { /*<Child name = {count}/>  Will rerender bcz count changes bcz its prop is changing*/}



    </>
  )
}
export default App

// function Greet(prop){
//   return(
//     <p>Good Morning {prop.name}</p>
//   )
// }
