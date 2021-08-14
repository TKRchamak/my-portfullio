import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="headerStyle">
            <Navbar></Navbar>
            <div className="container">
                <div className="d-flex justify-content-lg-start justify-content-center align-items-lg-center align-items-md-end align-items-center headerMain">
                    <div className="text-center">
                        <h1 className="fs-2">Looking For A Web Developer ?</h1>
                        <p>Look no more. I am a Web Designer and Developer.</p>
                        <a className=" btn rounded-pill" style={{
                            backgroundImage: "linear-gradient(90deg, #3AAFA9, #3BAEA9)", padding: "5px 25px 5px 25px", color: "white",
                            fontWeight: "600", textTransform: "uppercase", borderColor: "transparent"
                        }} href="https://drive.google.com/uc?id=10k0WaRAhwxNIjJGeZ0zzj1JZbjBGWwdr&export=download"><FontAwesomeIcon icon={faCloudDownloadAlt} /> Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;