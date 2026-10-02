// The maths that moves the planets like real ones (Kepler's laws).
// You don't need to change anything here.

// 250,000x real speed: Earth goes round the Sun in about 2 minutes
export const SPEED = 250000;

const toRadians = (degrees) => (degrees * Math.PI) / 180;

// Days since 1 Jan 2000, so the planets start where they really are today
export const daysSince2000 = () => {
    const start = Date.UTC(2000, 0, 1, 12);
    return (Date.now() - start) / 86400000;
};

// Where a planet is after "days" days.
// Returns x and y between -1 and 1, with the Sun at (0, 0).
export const planetPosition = (planet, days) => {
    const a = planet.distance;      // half the long side of the oval
    const e = planet.eccentricity;
    const turn = toRadians(planet.perihelion);

    // "mean anomaly": how far round the planet would be if it moved at a steady speed
    const meanAnomaly = toRadians(planet.startLongitude - planet.perihelion)
        + (2 * Math.PI * days) / planet.periodDays;

    // Real planets speed up near the Sun and slow down far away.
    // Kepler's equation (E - e*sin(E) = meanAnomaly) gives the true spot.
    // It can't be solved directly, so we guess and improve the guess 5 times.
    let E = meanAnomaly;
    for (let i = 0; i < 5; i++) {
        E = E - (E - e * Math.sin(E) - meanAnomaly) / (1 - e * Math.cos(E));
    }

    // position on the oval, with the closest point to the Sun pointing right
    const b = a * Math.sqrt(1 - e * e);   // half the short side of the oval
    const flatX = a * (Math.cos(E) - e);
    const flatY = b * Math.sin(E);

    // turn the oval to face its real direction
    return {
        x: flatX * Math.cos(turn) - flatY * Math.sin(turn),
        y: flatX * Math.sin(turn) + flatY * Math.cos(turn)
    };
};

// The numbers needed to draw a planet's orbit as an SVG ellipse
export const orbitShape = (planet) => {
    const a = planet.distance;
    const e = planet.eccentricity;
    const turn = toRadians(planet.perihelion);
    return {
        rx: a,
        ry: a * Math.sqrt(1 - e * e),
        // the Sun is not in the middle of the oval, so the oval is shifted away from it
        cx: -a * e * Math.cos(turn),
        cy: a * e * Math.sin(turn),   // + because on screen, y goes down
        angle: -planet.perihelion
    };
};
