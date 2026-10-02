import './Navbar.css'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"


// onShowProjects = function from App that zooms in on the first project
// onGoHome       = function from App that zooms back out to the whole solar system
const Navbar = ({ onShowProjects, onGoHome }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // close the mobile menu after a link is clicked
    const closeMenu = () => setClick(false);


  return (
    <div className="header">
        <a href="#projects" className="logo" onClick={() => { closeMenu(); onGoHome(); }}>Portfolio</a>
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
                <a href="#projects" onClick={() => { closeMenu(); onShowProjects(); }}>Projects</a>
            </li>
            <li>
                {/* opens public/resume.pdf in a new tab */}
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a>
            </li>
            <li>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color: "#fff"}}/>
            ):(
                <FaBars size={20} style={{color: "#fff"}}/>
            )}
        </div>
    </div>
  )
}

export default Navbar
