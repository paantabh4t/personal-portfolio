// The eight real planets and their real orbit numbers.
// Photos: NASA, public domain (via Wikimedia Commons).
import mercuryImg from "../assets/planets/mercury.jpg"
import venusImg from "../assets/planets/venus.jpg"
import marsImg from "../assets/planets/mars.jpg"
import jupiterImg from "../assets/planets/jupiter.jpg"
import saturnImg from "../assets/planets/saturn.jpg"
import uranusImg from "../assets/planets/uranus.jpg"
import neptuneImg from "../assets/planets/neptune.jpg"

// What each number means:
// periodDays     = real days for one trip around the Sun
// eccentricity   = how oval the orbit is (0 = perfect circle)
// perihelion     = direction (in degrees) of the point closest to the Sun
// startLongitude = where the planet was on 1 Jan 2000 (degrees)
// distance       = how far out it is drawn. Real distances don't fit on a screen
//                  (Neptune is 77x farther than Mercury), so these keep the right
//                  order but are spaced out evenly.
// size           = how wide it is drawn, as a % of the solar system's width
//                  (also not to scale, or the small planets would be invisible)
// crop           = the shape that cuts the planet out of its black photo background

export const planets = [
    { id: "mercury", name: "Mercury", image: mercuryImg, periodDays: 87.969,  eccentricity: 0.2056, perihelion: 77.46,  startLongitude: 252.25, distance: 0.20, size: 1.8, crop: "ellipse(46% 46% at 49.5% 50%)" },
    { id: "venus",   name: "Venus",   image: venusImg,   periodDays: 224.701, eccentricity: 0.0068, perihelion: 131.53, startLongitude: 181.98, distance: 0.32, size: 2.6, crop: "ellipse(46.5% 46.5% at 51.4% 49.8%)" },
    { id: "earth",   name: "Earth",   image: null,       periodDays: 365.256, eccentricity: 0.0167, perihelion: 102.94, startLongitude: 100.46, distance: 0.44, size: 2.7 },
    { id: "mars",    name: "Mars",    image: marsImg,    periodDays: 686.980, eccentricity: 0.0934, perihelion: 336.04, startLongitude: 355.45, distance: 0.55, size: 2.1, crop: "ellipse(49.5% 48.8% at 49.8% 48.8%)" },
    { id: "jupiter", name: "Jupiter", image: jupiterImg, periodDays: 4332.59, eccentricity: 0.0489, perihelion: 14.75,  startLongitude: 34.40,  distance: 0.70, size: 5, crop: "ellipse(46% 44.5% at 50.4% 49.8%)" },
    { id: "saturn",  name: "Saturn",  image: saturnImg,  periodDays: 10759.2, eccentricity: 0.0565, perihelion: 92.43,  startLongitude: 49.94,  distance: 0.81, size: 7.5, crop: "ellipse(42.5% 36% at 49.8% 51.7%)" },
    { id: "uranus",  name: "Uranus",  image: uranusImg,  periodDays: 30688.5, eccentricity: 0.0457, perihelion: 170.96, startLongitude: 313.23, distance: 0.90, size: 3.3, crop: "ellipse(40.6% 39.6% at 49.6% 49.4%)" },
    { id: "neptune", name: "Neptune", image: neptuneImg, periodDays: 60182,   eccentricity: 0.0113, perihelion: 44.97,  startLongitude: 304.88, distance: 0.97, size: 3.2, crop: "ellipse(42.6% 43% at 48.8% 49.8%)" }
];

// Comet Encke: a real comet that goes round the Sun every 3.3 years
// (about 7 minutes at 250,000x speed). It swoops inside Mercury's orbit
// and swings back out almost to Jupiter's.
// startLongitude is set so it passes closest to the Sun on 22 Oct 2023, like the real one.
// Its real eccentricity is 0.85; it is drawn as 0.62 because the distances are squeezed.
export const comet = {
    id: "comet", name: "Comet Encke", periodDays: 1204.9, eccentricity: 0.62, perihelion: 161.1, startLongitude: 83.6, distance: 0.395
};
