import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark ">
            <div className="container p-5 text-center">
                <p style={{color:"#ffffff"}}>Copyright &copy; {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;