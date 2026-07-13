import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="First Name"
          value={Fname}
          onChange={(e) => setFname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={Lname}
          onChange={(e) => setLname(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={() =>
            alert(`Name: ${Fname} ${Lname}\nEmail: ${email}`)
          }
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;