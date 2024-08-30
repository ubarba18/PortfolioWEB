import React from "react";
import { CgUser, CgExport, CgMailOpen } from "react-icons/cg";
import { FaLinkedin, FaGithub  } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="Navbar-container">
            <div className="Navbar-profile">
                <h1>Uriel Barba</h1>
                <img className="pfp" src="images/lul.jpg" alt="me"></img>
                <p>Software Developer</p>
                <ul className="Navbar-social">
                    <li class="list-inline-item">
                        <a href="https://www.linkedin.com/in/urielbarba/"> <FaLinkedin />
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://github.com/ubarba18"> <FaGithub  />
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
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    const resumeUrl = '1I6L3gO2YWaDEk_4mWgXZr1XP4MIJ3D_raOzloh9X2eg';
                    const iframe = document.createElement('iframe');
                    iframe.src = `https://docs.google.com/gview?url=${resumeUrl}&embedded=true`;
                    iframe.width = '100%';
                    iframe.height = '500px';
                    const container = document.getElementById('resume-container');
                    container.innerHTML = '';
                    container.appendChild(iframe);
                }}>
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
