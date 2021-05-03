import React from 'react';
import './Contact.css'

import Email from '../Mail/Email';

const Contact = () => {
    return (
        <div className="p-5" style={{ backgroundColor: "#1E2749", color: "#ffffff" }}>
            <div className="container">
                <h5>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</h5>
                <div class="row align-items-center pt-5 justify-content-center">
                    <div className="col">
                        <Email></Email>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;