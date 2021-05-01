import React from 'react';
import emailjs from 'emailjs-com';

const Email = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nhj5uyp', 'template_vrq4fnf', e.target, 'user_klVnBJJwkoOowH6j36kkx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            e.target.reset();
    };
    return (
        
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label markWord">Name</label>
                <input type="text" name="user_name" class="form-control" id="exampleInputEmail1" />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label markWord">Email</label>
                <input type="email" name="user_email" class="form-control" id="exampleInputEmail1" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label markWord">Message</label>
                <textarea name="message" class="form-control" id="exampleInputEmail1" />
            </div>
            <input className="btn btn-style" type="submit" value="Send" />
        </form>
    );
};

export default Email;