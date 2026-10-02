import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SolarSystem from './components/SolarSystem'
import ProjectPanel from './components/ProjectPanel'
import AboutContent from './components/AboutContent'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { projects, formingPlanet } from './data/projects'

// the planets you can visit, in order: every project, then the forming planet
const stops = [...projects.map((project) => project.id), formingPlanet.id]


function App() {
  // which planet is picked right now (null = none)
  const [selectedId, setSelectedId] = useState(null)

  // clicking the same planet again un-picks it
  const handleSelect = (id) => {
    if (id === selectedId) {
      setSelectedId(null)
    } else {
      setSelectedId(id)
    }
  }

  // the Projects link in the header zooms in on the first project
  const showFirstProject = () => setSelectedId(stops[0])

  // the arrows: step = 1 goes to the next planet, step = -1 to the one before.
  // The "%" makes it wrap around, so "next" on the last planet goes back to the first.
  const moveBy = (step) => {
    const current = stops.indexOf(selectedId)
    const next = (current + step + stops.length) % stops.length
    setSelectedId(stops[next])
  }

  // how far you have scrolled down to the second panel: 0 = top, 1 = all the way
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // people who turn off animations in their settings don't get the shrink effect
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }
    const handleScroll = () => {
      setScrollProgress(Math.min(window.scrollY / window.innerHeight, 1))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // as you scroll down, the solar system shrinks, fades and drifts down a little
  const systemStyle = {
    opacity: 1 - scrollProgress * 0.85,
    transform: `translateY(${scrollProgress * 15}vh) scale(${1 - scrollProgress * 0.3})`
  }

  return (
  <>
    <Navbar onShowProjects={showFirstProject} onGoHome={() => setSelectedId(null)}/>

    {/* Panel 1: the solar system */}
    <section className="panel panel-system" id="projects" style={systemStyle}>
      <SolarSystem selectedId={selectedId} onSelect={handleSelect}/>
      {/* "key" makes React rebuild the panel when the pick changes, so it slides in again */}
      <ProjectPanel
      key={selectedId ?? "none"}
      selectedId={selectedId}
      onClose={() => setSelectedId(null)}
      />

      {/* the arrows only show while zoomed in on a planet */}
      {selectedId && (
        <>
          <button className="arrow arrow-left" aria-label="Previous project" onClick={() => moveBy(-1)}>
            <FaChevronLeft/>
          </button>
          <button className="arrow arrow-right" aria-label="Next project" onClick={() => moveBy(1)}>
            <FaChevronRight/>
          </button>
        </>
      )}
    </section>

    {/* Panel 2: name + about me on the left, get in touch on the right */}
    <section className="panel panel-about">
      <div className="about-grid">
        <AboutContent/>
        <GetInTouch/>
      </div>
      <Footer/>
    </section>
  </>
  )
}

export default App
