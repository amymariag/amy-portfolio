// src/App.js
import React, { useEffect } from 'react';
import FaultyTerminal from './components/FaultyTerminal';
import './App.css';
import './components/FaultyTerminal.css';

function App() {
  useEffect(() => {
    // Smooth scrolling for nav links
    document.querySelectorAll('#navButtons .navButton').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        document
          .querySelector(btn.getAttribute('href'))
          ?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="App">
      {/* Full-screen terminal background */}
      <div className="faulty-terminal-container">
         <FaultyTerminal
         scale={1.5}                   // from your “Scale” slider
         gridMul={[2, 1]}              // leave as-is
         digitSize={1.2}               // “Digit Size”
         timeScale={0.5}               // “Speed”
         pause={false}
         scanlineIntensity={0.5}       // “Scanline Intensity”
         glitchAmount={1}
         flickerAmount={1}
         noiseAmp={1}                  // “Noise Amplitude”
         chromaticAberration={0}
         dither={0}
         curvature={0.1}               // “Curvature”
         tint="#C3B1E1"                // **your purple tint**!
         mouseReact={true}             // “Mouse React”
         mouseStrength={0.5}           // “Mouse Strength”
         pageLoadAnimation={false}     // “Page Load Animation”
         brightness={0.6}              // “Brightness”
       />
      </div>

      {/* Site content on top */}
      <div className="site-content">
         <header className="masthead">
           <h1 id="name">Amy Marie Gonzalez</h1>
           <hr />
         </header>

        <nav id="navButtons">
          <a href="#about" className="navButton">About</a>
          <a href="#education" className="navButton">Education</a>
          <a href="#experience" className="navButton">Experience</a>
          <a href="#skills" className="navButton">Skills</a>
          <a href="#portfolio" className="navButton">Portfolio</a>
          <a href="#activities" className="navButton">Activities</a>
          <a href="#contact" className="navButton">Contact</a>
        </nav>

        <main>
          {/* ABOUT */}
          <section id="about" className="content-section">
            <div className="info-card">
              <h2>About</h2>
              <p>
                Hello! My name is Amy Gonzalez and I am a senior at the University of Central Florida
                studying Computer Science. I am a motivated student with a strong track record of
                leading teams to success and helping others with their technical challenges. I
                specialize in aligning technology with business goals and improving operational
                efficiency. I am interested in full-time positions where I can contribute my skills
                to innovative projects.
              </p>
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" className="content-section">
            <div className="info-card">
              <h2>Education</h2>
              <div className="education-container">
                {/* UCF */}
                <div
                  className="flip-card"
                  onClick={e => e.currentTarget.classList.toggle('flipped')}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front card-style">
                      <img src="assets/img/ucf.jpeg" alt="UCF" />
                      <h3>University of Central Florida</h3>
                      <p>Honors B.S. Computer Science | Orlando, FL | GPA: 3.5</p>
                      <p>Expected Graduation: August 2025</p>
                    </div>
                    <div className="flip-card-back card-style">
                      <p>
                        <strong>Relevant Coursework:</strong><br/>
                        Data Structures, Object-Oriented Design, Database Systems, AI, Algorithms
                        for Machine Learning, Discrete Structures, Operating Systems, System Software
                      </p>
                    </div>
                  </div>
                </div>

                {/* WHS */}
                <div
                  className="flip-card"
                  onClick={e => e.currentTarget.classList.toggle('flipped')}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front card-style">
                      <img src="assets/img/whs.jpeg" alt="Wiesbaden High School" />
                      <h3>Wiesbaden High School</h3>
                      <p>Hesse, Germany</p>
                    </div>
                    <div className="flip-card-back card-style">
                      <p>Graduated from Wiesbaden High School in Hesse, Germany.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="content-section">
            <div className="info-card">
              <h2>Experience</h2>
              <div className="experience-container">
                {/* Tesla 2025 */}
                <div
                  className="flip-card"
                  onClick={e => e.currentTarget.classList.toggle('flipped')}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front card-style">
                      <img src="assets/img/tesla.svg" alt="Tesla" />
                      <h3>Tesla (May–Aug 2025)</h3>
                      <p>Software Engineer Intern | Palo Alto, CA</p>
                    </div>
                    <div className="flip-card-back card-style">
                      <ul>
                        <li>Built a signage portal with Angular.js & Spring Boot.</li>
                        <li>Integrated Samsung MagicInfo APIs via Swagger.</li>
                        <li>Developed interactive data visualizations & Excel export.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Tesla 2024 */}
                <div
                  className="flip-card"
                  onClick={e => e.currentTarget.classList.toggle('flipped')}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front card-style">
                      <img src="assets/img/tesla.svg" alt="Tesla" />
                      <h3>Tesla (May–Aug 2024)</h3>
                      <p>Software Engineer Intern | Palo Alto, CA</p>
                    </div>
                    <div className="flip-card-back card-style">
                      <ul>
                        <li>Built AV health dashboards.</li>
                        <li>Created CI/CD pipelines with GitHub Actions & Kubernetes.</li>
                        <li>Optimized distributed SQL queries in Presto.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Siemens */}
                <div
                  className="flip-card"
                  onClick={e => e.currentTarget.classList.toggle('flipped')}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front card-style">
                      <img src="assets/img/siemens.jpg" alt="Siemens AG" />
                      <h3>Siemens AG (Feb 2023–Apr 2024)</h3>
                      <p>Software Engineer Intern | Orlando, FL</p>
                    </div>
                    <div className="flip-card-back card-style">
                      <ul>
                        <li>Automated compliance workflows with Python & Power Automate.</li>
                        <li>Developed Mendix + React apps for legacy digitization.</li>
                        <li>Led requirements meetings with 50+ stakeholders.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="content-section">
            <div className="info-card">
              <h2>Skills</h2>
              <ul>
                <li><strong>Languages:</strong> Java, C/C++, Python, JS, Go, Swift, SQL, HTML/CSS</li>
                <li><strong>Frameworks:</strong> SwiftUI, AppKit, Node.js, React, Spring Boot, Flask, Vue.js</li>
                <li><strong>Tools/DevOps:</strong> Docker, Kubernetes, WebSocket, Xcode, Unity, Figma, Git, Linux, AWS, Final Cut Pro, Photoshop</li>
                <li><strong>Spoken:</strong> Spanish (Bilingual), German (C1)</li>
              </ul>
            </div>
          </section>

          {/* PORTFOLIO */}
          <section id="portfolio" className="content-section">
            <div className="info-card">
              <h2>Portfolio</h2>
              <div className="portfolio-container">
                {/* MindMove */}
                <div
                  className="flip-card"
                  onClick={e => e.currentTarget.classList.toggle('flipped')}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front card-style">
                      <img src="assets/img/mindmove.png" alt="MindMove" />
                      <h3>MindMove – Wellness App (Jul 2025)</h3>
                      <p>Swift, SwiftUI, HealthKit, WatchKit, CoreMotion, Figma</p>
                    </div>
                    <div className="flip-card-back card-style">
                      <p>iOS & WatchOS app for micro-activity breaks via haptic reminders.</p>
                    </div>
                  </div>
                </div>
                {/* Add additional flip-cards here */}
              </div>
            </div>
          </section>

          {/* ACTIVITIES */}
          <section id="activities" className="content-section">
            <div className="info-card">
              <h2>Activities & Accomplishments</h2>
              <ul className="activities-list">
                <li>SHPE – Member (2021–Present)</li>
                <li>Google DSC – Member (2022–Present)</li>
                <li>Theta Tau Fraternity (2022–Present)</li>
                <li>SWE – Member (2022–Present)</li>
                <li>Hack@UCF – Cybersecurity Club (2022–Present)</li>
                <li>Knights of the Turntables – DJ Lead (2024–Present)</li>
                <li>UCF Symphony Orchestra – Violin (2024–2025)</li>
              </ul>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="content-section">
            <div className="info-card">
              <h2>Contact Me</h2>
              <p>Phone: <a href="tel:+18635213869">863-521-3869</a></p>
              <p>Email: <a href="mailto:amymariag217@gmail.com">amymariag217@gmail.com</a></p>
              <p>
                LinkedIn:{' '}
                <a href="https://linkedin.com/in/amymariegonzalez" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/amymariegonzalez
                </a>
              </p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© 2024 Amy Marie Gonzalez</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
