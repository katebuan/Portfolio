import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">

      {/* NAVIGATION */}
      <nav>
        <h2>My Portfolio</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="section home">
        <h1 className="fade-in">Hello, I'm <span>Kate Lyn P. Buan</span></h1>
        <p className="fade-in delay-1">Full Stack Developer | Mobile Developer | AI-assisted Programmer</p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="project-card slide-up">
          <h3>Ypu can view my projects here.</h3>
          <p>A full-stack system built using ReactJS, and React Native.</p>

          <ul>
            <li>🔗 Web CRUD App (ReactJS): 
              <a href="https://crudweb-three.vercel.app/" target="_blank" rel="noopener noreferrer">View</a>
            </li>
            <li>🔗 Mobile CRUD App (React Native): 
              <a href="https://mobilecrud.vercel.app/" target="_blank" rel="noopener noreferrer">View</a>
            </li>
          </ul>
        </div>

      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>Django</span>
          <span>ReactJS</span>
          <span>React Native</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>REST API</span>
          <span>Firebase</span>
          <span>MongoDB</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="section">
        <h2>Certificates</h2>

        <div className="cert-grid">

          <div className="cert-card fade-in">
            <h3>Network Support and Security</h3>
            <p>Issued by: Cisco</p>
            <a href="https://www.credly.com/badges/a67ded51-8ff5-459f-9ad1-c88c6e1a4362/public_url" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>

          <div className="cert-card fade-in delay-1">
            <h3>JavaScript Essentials 1 Certificate</h3>
            <p>Issued by: Cisco</p>
            <a href="https://www.credly.com/badges/84891770-050f-41fa-9b11-50adcfa4c122/public_url" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate full-stack developer who builds modern web and mobile applications.
          I maximize AI-assisted coding tools like ChatGPT, Blackbox, and GitHub Copilot 
          to deliver fast and high-quality software solutions.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <strong>your.email@gmail.com</strong></p>
        <p>
          GitHub: 
          <a 
            href="https://github.com/YOUR_USERNAME" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            github.com/YOUR_USERNAME
          </a>
        </p>
      </section>

    </div>
  );
}

export default App;
