import React from "react";
import { CgUser, CgExport, CgMailOpen } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = ({ openModal }) => {
    return (
        <nav className="Navbar-container">
            <div className="Navbar-profile">
                <h1>Uriel Barba</h1>
                <img className="pfp" src="images/lul.jpg" alt="me"></img>
                <p>Software Developer</p>
                <ul className="Navbar-social">
                    <li class="list-inline-item">
                        <a
                            href="https://www.linkedin.com/in/urielbarba/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            <FaLinkedin />
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a
                            href="https://github.com/ubarba18"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="Navbar-links">
                <hr></hr>
                <li className="nav-item">
                    <a href="#">
                        <CgUser /> About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" onClick={openModal}>
                        <CgExport /> Resume
                    </a>
                    <div id="resume-container"></div>
                </li>

                <li className="nav-item">
                    <a href="#">
                        <CgMailOpen /> Contact Me
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
