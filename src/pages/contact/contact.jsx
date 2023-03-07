import React from 'react';
import { Navbar } from '../../components/navbar';
import './contact.scss';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
