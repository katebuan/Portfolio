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
          <h3>Task Manager System (CRUD + Auth)</h3>
          <p>A full-stack system built using Django, ReactJS, and React Native.</p>

          <ul>
            <li>🔗 Web App (React): 
              <a href="YOUR_WEBAPP_LINK" target="_blank" rel="noopener noreferrer">View</a>
            </li>
            <li>🔗 Backend API (Django): 
              <a href="YOUR_BACKEND_LINK" target="_blank" rel="noopener noreferrer">View API</a>
            </li>
            <li>🔗 Mobile App (React Native APK): 
              <a href="YOUR_APK_LINK" target="_blank" rel="noopener noreferrer">Download</a>
            </li>
            <li>🗂️ GitHub Repository: 
              <a href="YOUR_GITHUB_REPO" target="_blank" rel="noopener noreferrer">GitHub</a>
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
            <h3>Web Development Certificate</h3>
            <p>Issued by: Example Academy</p>
            <a href="CERTIFICATE_LINK_1" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>

          <div className="cert-card fade-in delay-1">
            <h3>Python Programming Certificate</h3>
            <p>Issued by: Example Institute</p>
            <a href="CERTIFICATE_LINK_2" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>

          <div className="cert-card fade-in delay-2">
            <h3>Mobile Development Training</h3>
            <p>Issued by: Sample Training Center</p>
            <a href="CERTIFICATE_LINK_3" target="_blank" rel="noopener noreferrer">View Certificate</a>
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
