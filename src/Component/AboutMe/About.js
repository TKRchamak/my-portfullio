import React from 'react';
import './About.css'
import me from '../../Images/Shuporna - RFBD - G (48) - Copy.jpg'
import Email from '../Mail/Email';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <section id="about" className="aboutStyle">
            <div className="container">
                <div className="row d-flex">
                    <div className="figure col-6 pt-5">
                        <img src={me} className="figure-img img-fluid rounded" alt="" />
                    </div>
                    <div className="col-6 p-5 mt-5">
                        <h3 class="pt-5">Hi, I am </h3>
                        <h1>Tonmoy Kumar Roy</h1>
                        <p style={{ color: "gray", fontSize: "20px" }}>I work as interface and <span className="markWord">front end developer.</span> <br /> I have passion for pixel perfect, minimal and easy to use interfaces.</p>
                        {/* <p>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</p> */}
                        <div class="text-center pt-5">
                            <h3 className="pb-3">Contact Me</h3>
                            <p>Phone: +8801955406547</p>
                            <p>Email: tkrchamak9813467@gmail.com</p>
                            <a className="contactIcon markWord" href="https://github.com/TKRchamak"><FontAwesomeIcon icon={faGithubSquare} /></a>
                            <a className="contactIcon markWord" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a className="contactIcon markWord" href="#"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
                        </div>
                        {/* <Email></Email> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;