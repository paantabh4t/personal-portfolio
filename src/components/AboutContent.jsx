import { Link } from "react-router-dom"
import "./AboutContent.css"
import img1 from "../assets/download.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>who am i</h1>
            <p>isudfhiwehoweghwuegh</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>




        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} className="img" alt="About me"/>
                </div>
                <div className="img-stack bottom">
                    <img src={img1} className="img" alt="About me"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent