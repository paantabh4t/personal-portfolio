import "../components/HeroHome.css"
import IntroImg from "../assets/download.jpg"
import React from 'react'
import { Link } from "react-router-dom"

const HeroHome = () => {
  return <div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <p>hello</p>
        <h1>react dev</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  </div>
}

export default HeroHome