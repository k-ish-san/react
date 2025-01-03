// src/components/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact" className="contact">
      <h2><i class="fa fa-envelope"></i> Contact Me</h2>
      <p><i class="fa fa-map-marker "></i>  Kannur, Kerala</p>
      <p><i class="fa fa-phone "></i>  Phone: +91 9562498325</p>
      <p><i class="fa fa-envelope "></i>  Email: samrudhkishsanpm@gmail.com</p>
      <p>Let's get in touch. Send me a message:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

    </section>
  );
};

export default Contact;
