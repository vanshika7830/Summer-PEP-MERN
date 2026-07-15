import { useContext } from "react"
import {Link} from "react-router-dom"
import { ThemeContext } from "../../Context/ThemeContext"
import "./Navbar.css"
function Navbar(){
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <nav className="nav-container">
            <div className="nav-links">
                <Link to="/">Dashboard</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <button onClick={toggleTheme}>Toggle</button>
            </div>
        </nav>
    )
}
export default Navbar