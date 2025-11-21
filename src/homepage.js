import React, { useState, useEffect } from "react";
import "./Homepage.css";

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState("");

  // Load user from localStorage (optional)
  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setUsername(user);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.clear(); // remove token, username, etc.
    window.location.href = "/login"; // redirect to login page
  };

  return (
    <div className="home-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">TaskManager</h2>

        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#demo">Demo</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* PROFILE DROPDOWN */}
        <div className="profile-container">
          <div
            className="profile-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {username ? username.charAt(0).toUpperCase() : "U"}
          </div>

          {menuOpen && (
            <div className="dropdown-menu">
              <p className="dropdown-username">
                {username ? username : "User"}
              </p>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Manage Your Tasks Easily</h1>
        <p>The easiest way to track your work, boost productivity, and stay organized.</p>

        <div className="btn-group">
          <a href="/login" className="btn-primary">Login</a>
          <a href="/register" className="btn-secondary">Register</a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features">
        <h2>Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>✔ CRUD Operations</h3>
            <p>Create, read, update, and delete tasks seamlessly.</p>
          </div>

          <div className="feature-card">
            <h3>✔ User Authentication</h3>
            <p>Secure login and logout functionality.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Search Tasks</h3>
            <p>Easily search tasks using keywords.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Mobile + Web App</h3>
            <p>Built with ReactJS, Django, and React Native.</p>
          </div>
        </div>
      </section>

      {/* DEMO LINKS */}
      <section id="demo" className="demo">
        <h2>Project Demo</h2>
        <ul>
          <li>🔗 Web App: <a href="YOUR_REACT_LINK" target="_blank">View Website</a></li>
          <li>🔗 Backend API (Django): <a href="YOUR_API_LINK" target="_blank">Open API</a></li>
          <li>📱 Mobile APK: <a href="YOUR_APK_LINK" target="_blank">Download</a></li>
          <li>🗂 GitHub Repo: <a href="YOUR_GITHUB" target="_blank">View Code</a></li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <p>Developed by <strong>Your Name</strong></p>
        <p>Email: your.email@gmail.com</p>
      </footer>

    </div>
  );
}
