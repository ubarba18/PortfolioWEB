import React from "react";
import { CgUser, CgExport, CgMailOpen } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = ({ openModal }) => {
    return (
        <nav className="Navbar-container d-flex flex-column">
            <div className="Navbar-profile text-center">
                <h1>Uriel Barba</h1>
                <div className="pfp-container">
                    <img
                        className="pfp img-fluid"
                        src={`${process.env.PUBLIC_URL}/images/lul.jpg`}
                        alt="me"
                    />
                </div>
                <p>Software Developer</p>
                <ul className="Navbar-social list-inline">
                    <li className="list-inline-item">
                        <a
                            href="https://www.linkedin.com/in/urielbarba/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="https://github.com/ubarba18"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
            <ul className="Navbar-links style">
                <li className="nav-item">
                    <button
                        className="invisible-button"
                        onClick={() => {
                            /* Add your functionality here */
                        }}
                    >
                        <CgUser /> About Me
                    </button>
                </li>
                <li className="nav-item">
                    <button className="invisible-button" onClick={openModal}>
                        <CgExport /> Resume
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className="invisible-button"
                        onClick={() => {
                            /* Add your functionality here */
                        }}
                    >
                        <CgMailOpen /> Contact Me
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
