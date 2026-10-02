import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

// Your profile links
const github = "https://github.com/paantabh4t"
const linkedin = "https://www.linkedin.com/in/anubhav-biswas"
const instagram = "https://www.instagram.com/paantabh4t"

const iconStyle = {color: "#fff", margin: "0 1rem 0 1rem"}

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        {/* aria-label tells screen readers where each icon goes */}
        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={30} style={iconStyle}/>
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} style={iconStyle}/>
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={30} style={iconStyle}/>
        </a>
      </div>
    </div>
  )
}

export default Footer
