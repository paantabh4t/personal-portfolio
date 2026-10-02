import "./SolarSystem.css"
import { useState, useEffect, useRef } from 'react'
import { planets, comet } from "../data/planets"
import { projects, formingPlanet } from "../data/projects"
import { SPEED, daysSince2000, planetPosition, orbitShape } from "./orbitMath"
import sunImg from "../assets/planets/sun.jpg"

// how much the view zooms in when a project planet is clicked
const ZOOM = 2.4;

// selectedId  = id of the project that was clicked (or null)
// onSelect    = function from App that remembers which project was clicked
const SolarSystem = ({ selectedId, onSelect }) => {
  // the date inside the simulation, counted in days since 1 Jan 2000
  const [days, setDays] = useState(daysSince2000());

  // true while the mouse is on a project planet (useRef so changing it doesn't re-render)
  const paused = useRef(false);

  // a copy of selectedId that the animation loop below can read
  const selectedRef = useRef(selectedId);
  useEffect(() => {
    selectedRef.current = selectedId;
  }, [selectedId]);

  // Move time forward on every screen refresh (about 60 times a second)
  useEffect(() => {
    // people who turn off animations in their settings get a still solar system
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let lastTime = performance.now();
    let frame;

    const tick = (now) => {
      const seconds = (now - lastTime) / 1000;
      lastTime = now;
      // time stops while hovering a planet, or while zoomed in on one
      if (!paused.current && !selectedRef.current) {
        // real seconds x 250,000, turned into days
        setDays((d) => d + (seconds * SPEED) / 86400);
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // On phones the orbits are tilted less so the system is not too thin
  const tilt = window.innerWidth < 640 ? 0.7 : 0.45;

  // ---------- Zoom ----------
  // which planet belongs to the clicked project?
  let zoomPlanetId = null;
  if (selectedId === formingPlanet.id) {
    zoomPlanetId = formingPlanet.planet;
  } else {
    const project = projects.find((p) => p.id === selectedId);
    if (project) zoomPlanetId = project.planet;
  }

  // Zooming in = moving that planet to the middle, then making everything bigger
  let zoomStyle = {};
  if (zoomPlanetId) {
    const target = planetPosition(planets.find((p) => p.id === zoomPlanetId), days);
    zoomStyle = { transform: `scale(${ZOOM}) translate(${-target.x * 50}%, ${target.y * 50}%)` };
  }

  // ---------- Comet ----------
  const c = planetPosition(comet, days);
  const sunDistance = Math.sqrt(c.x * c.x + c.y * c.y);
  // a comet's tail always points away from the Sun...
  const tailAngle = (Math.atan2(-c.y * tilt, c.x) * 180) / Math.PI;
  // ...and grows longer the closer it gets to the Sun
  const tailLength = 1.2 / sunDistance;

  return (
    <div
    className={selectedId ? "solar-system has-selection" : "solar-system"}
    style={{ aspectRatio: 1 / tilt }}
    // clicking empty space zooms back out
    onClick={() => onSelect(null)}
    >
      <div className="zoom-layer" style={zoomStyle}>

        {/* The orbits. The SVG is stretched to the box, which squashes
            the ovals so they look tilted. */}
        <svg className="orbits" viewBox="-1 -1 2 2" preserveAspectRatio="none">
            {[...planets, comet].map((body) => {
                const o = orbitShape(body);
                let className = "orbit";
                if (body.id === formingPlanet.planet) className += " orbit-forming";
                if (body.id === comet.id) className += " orbit-comet";
                return (
                    <ellipse
                    key={body.id}
                    className={className}
                    cx={o.cx} cy={o.cy} rx={o.rx} ry={o.ry}
                    transform={`rotate(${o.angle} ${o.cx} ${o.cy})`}
                    />
                );
            })}
        </svg>

        <div className="sun">
            <img src={sunImg} alt="" />
        </div>

        {/* the comet: a bright head with a tail */}
        <div className="comet" style={{ left: 50 + c.x * 50 + "%", top: 50 - c.y * 50 + "%" }}>
            <span
            className="comet-tail"
            style={{ width: tailLength + "cqw", transform: `rotate(${tailAngle}deg)` }}
            ></span>
            <span className="comet-head"></span>
        </div>

        {planets.map((planet) => {
            const { x, y } = planetPosition(planet, days);
            const project = projects.find((p) => p.planet === planet.id);
            const isForming = formingPlanet.planet === planet.id;

            // the id that gets selected when this planet is clicked (scenery planets have none)
            const clickId = project ? project.id : isForming ? formingPlanet.id : null;
            const label = project ? project.name : isForming ? formingPlanet.name : planet.name;

            let className = "planet";
            if (clickId) className += " clickable";
            if (isForming) className += " forming";
            if (clickId && clickId === selectedId) className += " selected";

            const style = {
                // x and y go from -1 to 1; turn them into % of the box
                left: 50 + x * 50 + "%",
                top: 50 - y * 50 + "%",
                width: planet.size + "%",
                // planets on the far side of the Sun go behind it
                zIndex: y > 0 ? 1 : 3
            };

            // scenery planets are just pictures
            if (!clickId) {
                return (
                    <div className={className} style={style} key={planet.id}>
                        <img src={planet.image} alt={label} style={{ clipPath: planet.crop }} />
                    </div>
                );
            }

            // project planets (and the forming one) are buttons
            return (
                <button
                className={className}
                style={style}
                key={planet.id}
                // no text is shown, so this tells screen readers what the button is
                aria-label={label}
                onClick={(event) => {
                    // stop the click reaching the background, which would zoom back out
                    event.stopPropagation();
                    onSelect(clickId);
                }}
                onMouseEnter={() => (paused.current = true)}
                onMouseLeave={() => (paused.current = false)}
                onFocus={() => (paused.current = true)}
                onBlur={() => (paused.current = false)}
                >
                    {isForming ? (
                        <span className="forming-body">
                            <span className="forming-core"></span>
                            <span className="dust"></span>
                            <span className="dust"></span>
                            <span className="dust"></span>
                            <span className="dust"></span>
                            <span className="dust"></span>
                            <span className="dust"></span>
                        </span>
                    ) : (
                        <img src={planet.image} alt="" style={{ clipPath: planet.crop }} />
                    )}
                </button>
            );
        })}
      </div>
    </div>
  )
}

export default SolarSystem
