// All the content for your projects lives here.
// Each project takes over one real planet (see planets.js for the planet names).

export const projects = [
    {
        id: "project-one",
        planet: "mercury",
        name: "Days Till Banana Death",
        description: "Fine-tuned a resnet50 model to estimate the shelf-life of a banana",
        liveLink: "https://days-till-banana-death.streamlit.app",
        sourceLink: "https://github.com/paantabh4t/DaysTillBananaDeath"
    },
    {
        id: "project-two",
        planet: "venus",
        name: "Wordle With Multiple Levels",
        description: "Typical wordle game but with each right guess the word gets longer and harder to guess",
        liveLink: "https://wordle-eight-liard.vercel.app",
        sourceLink: "https://github.com/paantabh4t/wordle"
    }
];

// The planet that is still forming (your next project)
export const formingPlanet = {
    id: "forming",
    planet: "earth",
    name: "A new planet is forming",
    description: "Working on a rag pipeline"
};
