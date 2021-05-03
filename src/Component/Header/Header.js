import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="headerStyle position-relative">
            <Navbar></Navbar>
            <div className="container">
                <div className="position-absolute top-50 start-0 translate-middle-y text-center">
                    <h1>Looking For A Web Developer ?</h1>
                    <p>Look no more. I am a Web Designer and Developer.</p>
                    <button className=" btn rounded-pill" style={{
                        backgroundImage: "linear-gradient(90deg, #3AAFA9, #3BAEA9)",padding:"5px 25px 5px 25px" , color: "white",
                        fontWeight: "600", textTransform: "uppercase", borderColor: "transparent"
                    }} href="#########"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Header;