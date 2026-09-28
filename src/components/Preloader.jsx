import "./Preloader.css"
import React, { useState, useEffect } from 'react';
import catGif from "../assets/catLoader.gif"

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => setIsLoading(false);

        window.addEventListener("load", handleLoad);

        return () => window.removeEventListener("load", handleLoad);
    }, [])

    return (
        <>
            {isLoading && (
                <div className="preloader">
                    <img src={catGif} alt="Loading..." />
                    Loading!!!!
                </div>
            )}
        </>
);
};

export default Preloader;