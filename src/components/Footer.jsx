import "./Footer.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebook size={30} style={{color: "#fff", margin: "0 1rem 0 1rem"}}/>
        <FaTwitter size={30} style={{color: "#fff", margin: "0 1rem 0 1rem"}}/>
        <a 
        href="https://www.linkedin.com/in/anubhav-biswas/" 
        target="_blank" 
        rel="noopener noreferrer">
          <FaLinkedin size={30} style={{color: "#fff", margin: "0 1rem 0 1rem"}}/>
        </a>
      </div>
    </div>
  )
}

export default Footer