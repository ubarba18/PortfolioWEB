// About.js
import React from "react";

const About = () => {
    return (
        <div className="AboutMe-container">
            <div className="AboutMe-text">
                <h1> Uriel Barba </h1>
            </div>
            <div className="AboutMe-img">
                <img src={`${process.env.PUBLIC_URL}/images/lul.jpg`}></img>
            </div>
        </div>
    );
};

export default About;
