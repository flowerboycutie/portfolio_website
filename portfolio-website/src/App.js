import React, { useState } from 'react';  // Added for state management
import './App.css';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);  // State for menu visibility
  const [iconSrc, setIconSrc] = useState('/menu-icon.png');  // State for icon src (toggle between menu and close)

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);  // Toggle menu active state
    setIconSrc(isMenuActive ? '/menu-icon.png' : '/x.png');  // Toggle icon src (adjust '/close-icon.png' if your close image has a different name)
  };

  return (
    <div>
      <header className="header">
        <a href="#home" className="logo">
          Marvin <span>Dizon</span>
        </a>

        <img 
          src={iconSrc} 
          alt="Menu Icon" 
          id="menu-icon" 
          onClick={toggleMenu}  // Click handler to toggle menu and icon
          style={{ cursor: 'pointer', width: '35px', height: '35px' }}  // Inline styles for sizing (adjust as needed)
        />

        <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>

        <button className="gradient-btn">Contact Me</button>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, I'm <span>Marvin</span></h1>
          <h3>
            I'm a <span>CS Student</span>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum bibendum lacus eu lobortis. Curabitur ac luctus tortor. Nullam cursus metus sit amet ante facilisis tincidunt. Nam hendrerit vel diam et consequat. </p>

          <div className="social-icons">
            <a href="#">
              <img src="/github-logo.png" alt="GitHub" />
            </a>

            <a href="#">
              <img src="/linkedinicon.png" alt="LinkedIn" />
            </a>
          </div>

          <div className="btn-group">
            <a href="#" className="btn">Hire</a>
            <a href="#contact" className="btn">Contact</a>
          </div>
        </div>

        <div className="home-img">
          <img src="/profile-image.jpg" alt="Profile" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="/image.jpg" alt="About" />
        </div>

        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum bibendum lacus eu lobortis. Curabitur ac luctus tortor. Nullam cursus metus sit amet ante facilisis tincidunt. Nam hendrerit vel diam et consequat</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>

        <div className="projects-box">
          <div className="project-card">
            <img src="/project1.png" alt="Project 1" />
            <h3>Ka Chowwww</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum bibendum lacus eu lobortis. Curabitur ac luctus tortor. Nullam cursus metus sit amet ante facilisis tincidunt. Nam hendrerit vel diam et consequat</p>
            <div className="btn">View Project</div>
          </div>
          <div className="project-card">
            <img src="/project2.png" alt="Project 2" />
            <h3>bigay lahat ng yaman</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum bibendum lacus eu lobortis. Curabitur ac luctus tortor. Nullam cursus metus sit amet ante facilisis tincidunt. Nam hendrerit vel diam et consequat</p>
            <div className="btn">View Project</div>
          </div>
          <div className="project-card">
            <img src="/project3.png" alt="Project 3" />
            <h3>BRAZILLLLL</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum bibendum lacus eu lobortis. Curabitur ac luctus tortor. Nullam cursus metus sit amet ante facilisis tincidunt. Nam hendrerit vel diam et consequat</p>
            <div className="btn">View Project</div>
          </div>
          <div className="project-card">
            <img src="/project4.png" alt="Project 4" />
            <h3>baka renejay to</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum bibendum lacus eu lobortis. Curabitur ac luctus tortor. Nullam cursus metus sit amet ante facilisis tincidunt. Nam hendrerit vel diam et consequat</p>
            <div className="btn">View Project</div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>

        <form action="#">
          <div className="input-group">
            <div className="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-box">
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>

          <div className="input-group2">
            <textarea name="" id="" placeholder="Your Message" cols="30" rows="13"></textarea>
            <input type="submit" value="Send Message" className="btn" />
          </div>
        </form>
      </section>

      <footer className="footer">
        <ul className="list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <p className="copyright">
          &copy; Mark Marvin M. Dizon | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;