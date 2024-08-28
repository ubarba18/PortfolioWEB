import React from "react";
import { CgUser, CgExport, CgMailOpen } from "react-icons/cg";

const Navbar = () => {
    return (
        <nav className="Navbar-container">
            <div className="Navbar-profile">
                <h1>Uriel Barba</h1>
                <img className="pfp" src="images/lul.jpg" alt="me"></img>
                <p>Software Developer</p>
                <ul className="Navbar-social">
                    <li class="list-inline-item">
                        <a href=""></a>
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
                    <a href="#">
                        <CgExport /> Resume
                    </a>
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
