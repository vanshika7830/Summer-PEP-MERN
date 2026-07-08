import { useState } from "react";

function RegistrationForm() {
  const  [name, setName] = useState("")
  const  [regId, setId] = useState("")
  const  [email, setEmail] = useState("")
  const  [age, setAge] = useState("")
  const  [city, setCity] = useState("")
  const [designation, setDesignation] = useState("")
  return(
    <>
    <h2>Enter Your Details</h2>
    <input type="text" name="name" placeholder="Enter your name" 
    onChange={(e) => setName(e.target.value)}/> <br />
    <input type="text" name="regId" placeholder="Enter Registration number" 
    onChange={(e) => setId(e.target.value)}/> <br />
    <input type="email" name="email" placeholder="Enter your email" 
    onChange={(e) => setEmail(e.target.value)}/> <br />
    <input type="number" name="age" placeholder="Enter your age" 
    onChange={(e) => setAge(e.target.value)}/> <br />
    <input type="text" name="city" placeholder="Enter your City" 
    onChange={(e) => setCity(e.target.value)}/> <br />
    <select name="" id=""  onChange={(e) => setDesignation(e.target.value)}>
      <option value="Student">Student</option>
      <option value="Scholar">Scholar</option>
      <option value="Teacher">Teacher</option>
    </select> <br />
    <button onClick={() => {
      return(
      <div>
    <h2>Student Deatils</h2>
    <p>Name - {name}</p>
    <p>Registration Number - {regId}</p>
    <p>Email - {email}</p>
    <p>Age - {age}</p>
    <p>City - {city}</p>
    <p>Designation - {designation}</p>
    </div> )
    }}>Add Details</button>
    
    </>
  )
}

 
export default RegistrationForm;