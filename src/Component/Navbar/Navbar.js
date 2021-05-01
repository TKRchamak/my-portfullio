import React from 'react';
import './Navbar.css'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navStyle">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler joss" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Me</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/TKRchamak"><FontAwesomeIcon icon={faGithubSquare} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Download CV<FontAwesomeIcon icon={faCloudDownloadAlt} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;