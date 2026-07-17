import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="nav-container">
            <div className="logo">LearnHub</div>

            <div className="nav-links">
                <Link to="/">Dashboard</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>

                <button
                    className="theme-btn"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;