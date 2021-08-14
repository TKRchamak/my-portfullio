import React from 'react';
import './About.css';
import me from '../../Images/Shuporna - RFBD - G (48) - Copy.jpg';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloudDownloadAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <section id="about" className="aboutStyle">
            <div className="container">
                <div className="row pt-5">
                    <div className="figure col-lg-6 d-flex justify-content-center">
                        <img src={me} className="figure-img img-fluid rounded" alt="" />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h3 class="">Hi, I am </h3>
                            <h1>Tonmoy Kumar Roy</h1>
                            <p style={{ color: "gray", fontSize: "20px" }}>I work as interface and <span className="markWord">front end developer.</span>
                                <br /> I have passion for pixel perfect, minimal and easy to use interfaces.</p>
                            <div class="text-center">
                                <h3 className="pb-3">Contact Me</h3>
                                <p>Phone: +8801955406547</p>
                                <p>Email: tkrchamak9813467@gmail.com</p>
                                <a className="contactIcon markWord" href="https://github.com/TKRchamak"><FontAwesomeIcon icon={faGithubSquare} /></a>
                                <a className="contactIcon markWord" href="https://www.linkedin.com/in/tonmoy-kumar-roy-a4019b199/"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;