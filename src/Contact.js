import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contact.css';

const Contact = () => {
    const form = useRef();
    const [Status,setStatus]=useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xx7vmim', 'template_a86e7yg', form.current, {
        publicKey: 'N6eIYG-LlLY0iNmPs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('SUCCESSFULLY SENDED!');
          setTimeout(() => {
            setStatus('');
          }, 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('FAILED');
          setTimeout(() => {
            setStatus('');
          }, 2000);
        },
      );
  };

  return (
    <div className="contact-fullcontainer">
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">If you have any questions or inquiries, feel free to reach out to us using the form below.</p>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        {Status&&(
        <div className='successbar'>
            <p>{Status}</p>
        </div>)}
      </form>
    </div>
    <div className='other'>
    <ul>
        <li>Email id: sanjithg2302@gmail.com</li>
        <li>Mobile No: 9360330837</li>
    </ul>
    </div>
    </div>
  );
}

export default Contact;
