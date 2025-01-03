// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
    <Router>
      <Header />
      <ThemeSwitcher />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" exact element={<Home />} /> {/* Default route */}
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
