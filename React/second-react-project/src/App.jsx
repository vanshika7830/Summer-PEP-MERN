import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Signup from "./Pages/Signup/Signup"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import About from "./Pages/About/About"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
