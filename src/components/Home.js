// src/components/Home.js
import React from 'react';
import '../styles/Home.css';



const Home = () => {
  return (
    <section id="home" className="home">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <img src="/welcomecats.svg" alt="Logo" className="logo" />
        <p>I’m Samrudh Kishsan P M, a Web Developer and Python Enthusiast.</p>
      </div>
    </section>
  );
};

export default Home;
