import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="headerStyle position-relative">
            <Navbar></Navbar>
            <div className="container">
                <div className="position-absolute top-50 start-0 translate-middle-y text-center">
                    <h1>Looking For A Web Developer ?</h1>
                    <p>Look no more. I am a Web Designer and Developer.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;