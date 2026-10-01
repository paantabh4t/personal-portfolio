import "./WorkCard.css"
import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt={props.title}/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
                <div className="pro-btns">
                    <a href={props.view} target="_blank" rel="noopener noreferrer" className="btn">View</a>
                    <a href={props.view2} target="_blank" rel="noopener noreferrer" className="btn">Source</a>
                </div>
        </div>
    </div>
  )
}

export default WorkCard