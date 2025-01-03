// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/samrudhkishsanpm"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/_ki_sh_san_/"><i  className="fab fa-instagram"></i></a>
        <a href="https://github.com/k-ish-san/k-ish-san.github.io/tree/main"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/samrudh-k-ish-san-pm"><i className="fab fa-linkedin"></i></a>
        <p>Thank You for visiting my page.</p>
        <p>© 2025 Samrudh Kishsan P M</p>
      </div>
    </footer>
  );
};



export default Footer;
