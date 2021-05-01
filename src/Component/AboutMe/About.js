import React from 'react';
import './About.css'
import me from '../../Images/Shuporna - RFBD - G (48) - Copy.jpg'
import Email from '../Mail/Email';

const About = () => {
    return (
        <section className="aboutStyle">
            <div className="container">
                <div className="row d-flex">
                    <div className="figure col-6">
                        <img src={me} className="figure-img img-fluid rounded" alt="" />
                    </div>
                    <div className="col-6 p-5 mt-5">
                        <h3>Hi, I am </h3>
                        <h1>Tonmoy Kumar Roy</h1>
                        <p style={{color:"gray", fontSize:"20px"}}>I work as interface and <span style={{color:"#3BAFAA", fontWeight:'bolder'}}>front end developer.</span> <br /> I have passion for pixel perfect, minimal and easy to use interfaces.</p>
                        <button  className="btn btn-style mt-5">Contact Me</button>
                        <Email></Email>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;