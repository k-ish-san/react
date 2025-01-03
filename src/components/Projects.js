// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';


const Projects = () => {
  return (
    <section className="projects">
      <h2><i className="fa fa-folder"></i> My Projects</h2>
      <div className="project-card">
        <h2 className="project-title">Project 1</h2>
        <a href="https://k-ish-san.github.io/Rock-Paper-Scissors/" target="_blank" class="image-link">
        <img src="/rsp.jpg" alt="Example Image"/>
        </a>
        <p className="project-description">A brief description of Project 1.</p>
      </div>
      <div className="project-card">
        <h2 className="project-title">Project 2</h2>
        <p className="project-description">A brief description of Project 2.</p>
      </div>
      <div className="project-card">
        <h2 className="project-title">Project 3</h2>
        <p className="project-description">A brief description of Project 3.</p>
      </div>
    </section>
  );
};

export default Projects;

