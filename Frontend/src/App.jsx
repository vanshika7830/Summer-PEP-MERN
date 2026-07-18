import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Signup from "./Pages/Signup/Signup"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import About from "./Pages/About/About"
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";


function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
