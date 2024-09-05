import React from "react";

const Content = () => {
    return (
        <div className="Content">
            <div className="content-bio">
                <div className="content-container">
                    <h2 className="content-name"> Uriel Barba</h2>
                    <div className="content-title">Software Developer</div>

                    <div className="about-me-box">
                        Passionate about crafting exceptional web experiences,
                        I'm a software developer driven to innovate and excel.
                        With expertise in HTML, CSS, and JavaScript, I create
                        responsive, user-centric applications that inspire and
                        delight. Explore my portfolio to see my ambition in
                        action.
                    </div>
                </div>
                <div className="content-image">
                    <img src="./images/lul.jpg" alt="photo"></img>
                </div>
            </div>
        </div>
    );
};

export default Content;
