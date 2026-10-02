import "./ProjectPanel.css"
import { projects, formingPlanet } from "../data/projects"

// onClose = zooms back out to the whole solar system
const ProjectPanel = ({ selectedId, onClose }) => {
  // find the project that matches the clicked planet (if any)
  const project = projects.find((item) => item.id === selectedId);

  // nothing clicked yet
  if (selectedId === null) {
    return (
        <div className="project-panel">
            <p>Check out my planets.</p>
        </div>
    )
  }

  const backButton = (
    <button className="back-button" onClick={onClose}>Back to all planets</button>
  );

  // the forming planet was clicked
  if (selectedId === formingPlanet.id) {
    return (
        <div className="project-panel">
            <h2>{formingPlanet.name}</h2>
            <p>{formingPlanet.description}</p>
            {backButton}
        </div>
    )
  }

  // a finished project was clicked
  return (
    <div className="project-panel">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className="panel-links">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">View site</a>
            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="btn btn-light">View code</a>
        </div>
        {backButton}
    </div>
  )
}

export default ProjectPanel
