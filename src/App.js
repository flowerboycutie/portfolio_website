import React, { useState } from 'react'; 
import './App.css';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);  
  const [iconSrc, setIconSrc] = useState('/menu-icon.png');  

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);  
    setIconSrc(isMenuActive ? '/menu-icon.png' : '/x.png');  
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
          onClick={toggleMenu}  
          style={{ cursor: 'pointer', width: '35px', height: '35px' }}  
        />

        <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#certificates" onClick={toggleMenu}>Certificates</a>
        </nav>

        <a href="#contact" className="gradient-btn">Contact Me</a>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Hello world! I'm <span>Marvin</span></h1>
          <h3>
            I'm a <span>CSSE Student</span>
          </h3>
          <p>I thrive at the intersection of logic and creativity. I'm excited to connect and explore how I can bring combined technical and analytical perspective to your team.</p>

          <div className='social-and-contact'>
            <div className="social-icons">
              <a href="https://github.com/flowerboycutie" target='_blank'>
                <img src="/github-logo.png" alt="GitHub" />
              </a>

              <a href="https://www.linkedin.com/in/mark-marvin-dizon-5176452a3/" target='_blank'>
                <img src="/linkedinicon.png" alt="LinkedIn" />
              </a>
            </div>
              <a href="#contact" className="btn">Contact</a>
          </div>
        </div>

        <div className="home-img">
          <img src="/profile-image.jpg" alt="Profile" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src="/formal-photo.png" alt="About" />
        </div>

        <div className="about-content">
          <h2>About <span>Me</span></h2>
          <p>Hello! I'm Mark Marvin Dizon, a passionate and dedicated fourth-year Software Engineering student at FEU Tech, actively seeking an internship opportunity to apply my skills and contribute to a real-world development team.</p>
          <br/>
          <p>
          My journey into the world of code began back in high school at Pasig City Science High School. It was there, through electives in Programming, Robotics, and Game Development, that I first discovered the thrill of building things from the ground up. I was captivated by the process of solving puzzles with logic and creativity, a passion that has only grown stronger.
          </p>
          <br/>
          <p>
           Today, what truly drives me is the incredible satisfaction of that "aha!" moment—when a complex algorithm finally clicks into place, or after patiently debugging, the code runs flawlessly. I believe that this meticulous attention to detail and a genuine love for problem-solving are at the heart of creating efficient and robust software. 
          </p>
          <br/>
          <p>
          As I look forward to this next chapter, I am eager to bring my foundational knowledge, my problem-solving mindset, and my enthusiasm to an innovative company. I am ready to learn, collaborate, and help turn ideas into impactful digital solutions.
          </p>
          <br/>
          <p>
          Let's build something great together!
          </p>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="heading">Projects</h2>

        <div className="projects-box">
          <div className="project-card">
            <img src="/portfolio-website.jpg" alt="Portfolio Website" />
            <h3>React | Portfolio Website</h3>
            <p>A modern, responsive portfolio website built with React, showcasing my projects, certificates, and journey as a Software Engineering student.</p>
            <a href='https://github.com/flowerboycutie/portfolio_website' target='_blank' className="btn">View Project</a>
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

      <section className='certificates' id='certificates'>
        <h2 className='heading'>Certificates</h2>

        <div className='certificates-box'>
          <div className="certificates-card">
            <img src="/pmi-cert.png" alt="PMI Project Management Ready®" />
            <h3>PMI Project Management Ready®</h3>
            <a href="/pmi-cert.png" target="_blank" rel="noopener noreferrer" className="btn">View Certificate</a>
          </div>
          <div className="certificates-card">
            <img src="/python-cert.png" alt="IT Specialist - Python" />
            <h3>IT Specialist - Python</h3>
            <a href="/python-cert.png" target="_blank" rel="noopener noreferrer" className="btn">View Certificate</a>
          </div>
        </div>
      </section>      

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="d7769c47-5a1d-4b59-ad6d-958607bf1631"></input>
          <div className="input-group">
            <div className="input-box">
              <input type="text" name="name" placeholder="Full Name" required/>
              <input type="email" name="email" placeholder="Email" required/>
            </div>

            <div className="input-box">
              <input type="number" name="number" placeholder="Phone Number" />
              <input type="text" name="subject" placeholder="Subject" required/>
            </div>
          </div>

          <div className="input-group2">
            <textarea name="message" id="" placeholder="Your Message" cols="30" rows="11"></textarea>
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
            <a href="#certificates">Certificates</a>
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