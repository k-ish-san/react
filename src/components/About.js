// src/components/About.js
import React, { useState } from 'react';
import '../styles/About.css';
import 'devicon/devicon.min.css';
import '../styles/Button.css';


const About = () => {
  const [showResume, setShowResume] = useState(false);

  const handleViewResume = () => {
    setShowResume(true);
  };

  return (
    <div>
    <section id="about" className="about">
      <h2><i class="fa fa-user fa-fa-1x"></i> About Me</h2>
      <p>
        I am an aspiring web developer and Python enthusiast. My passion lies in creating clean, efficient web 
        solutions and tackling coding challenges. I also have a strong interest in IoT, combining my electronics 
        background with software development.
      </p>
    </section>
    <section id="education" className="education">
      <h2><i className="fas fa-graduation-cap"></i> Education</h2>
        <ul>
            <li><h3>Bachelor of Technology (B.Tech)</h3></li>
            <p><strong>Government College of Engineering, Kannur</strong></p>
            <p>Electronics and Communication Engineering</p>
            <p>2020 - 2024</p>
            <p><em>Percentage: 75.8%</em></p>
        </ul>
        
        <ul>
          <li><h3>Higher Secondary Education</h3></li>
          <p><strong>Nithyananda Bhavan English Medium School</strong></p>
          <p>Computer Science</p>
          <p>2018 - 2020</p>
          <p><em>Percentage: 94.2%</em></p>
        </ul>
    </section>

    <section id="education" className="education">
      <h2 className="text-var"><i className="fas fa-laptop-code"></i> My Skills</h2>
        <div className="icon-container">
          <div>
            <i className="devicon-html5-plain colored icon "></i>
            <div className="icon-label text-var">HTML5</div>
          </div>
          <div>
            <i className="devicon-css3-plain colored icon "></i>
            <div className="icon-label text-var">CSS3</div>
          </div>
          <div>
            <i className="devicon-python-plain colored icon "></i>
            <div className="icon-label text-var">Python</div>
          </div>
          <div>
            <i className="devicon-javascript-plain colored icon"></i>
            <div className="icon-label text-var">JavaScript</div>
          </div>
          <div>
            <i className="devicon-react-plain colored icon"></i>
            <div className="icon-label text-var">React JS</div>
          </div>
          <div>
            <i className="devicon-git-plain colored icon"></i>
            <div className="icon-label text-var">Git Bash</div>
          </div>
          <div>
            <i className="devicon-vscode-plain colored icon"></i>
            <div className="icon-label text-var">VS Code</div>
          </div>
        </div>

        {/* View Resume Button */}
        <button className="btn" id="view-btn" onClick={handleViewResume}>
          <strong>View Resume <i className="fa fa-eye"></i></strong>
        </button>

         {/* Download Resume Button */}
        <a href="/resume_.pdf" download >
        <button type="button" className="btn" id="download-btn">
          <strong>Download Resume <i class="fa fa-download"></i></strong>
        </button>
        </a>

        {/* Display Resume in iframe when button is clicked */}
        {showResume && (
          <div className="resume-container">
            <iframe
              src="/resume_.pdf"
              width="100%"
              height="600px"
              title="Resume"
            ></iframe>
          </div>
        )}
    </section>
    </div>
  );
};

export default About;
