import React, { useEffect } from 'react';
import Galaxy from './components/Galaxy';
import './App.css';

function App() {
  useEffect(() => {
    const navButtons = document.querySelectorAll('#navButtons .navButton');
    navButtons.forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault();
        const targetId = button.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    const cards = document.querySelectorAll('.education-card, .experience-card, .portfolio-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.target;
        if (id) showDescription(id);
      });
    });
  }, []);

  function showDescription(id) {
    const desc = document.getElementById(id);
    if (!desc) return;
    if (desc.style.display === 'block') {
      fadeOutDescription(desc);
    } else {
      fadeInDescription(desc);
    }
  }

  function fadeOutDescription(el) {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.display = 'none';
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }

  function fadeInDescription(el) {
    el.style.display = 'block';
    el.style.opacity = 0;
    (function fade() {
      let val = parseFloat(el.style.opacity);
      if ((val += 0.1) <= 1) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  return (
    <div className="App">
      <Galaxy mouseInteraction />

      <header className="masthead d-flex align-items-center">
        <div className="container text-center">
          <h1 className="mb-1" id="name">Amy Marie Gonzalez</h1>
          <hr />
        </div>
      </header>

      <nav id="navButtons">
        <a href="#about" className="navButton">About</a>
        <a href="#education-experience" className="navButton">Education & Experience</a>
        <a href="#skills" className="navButton">Skills</a>
        <a href="#portfolio" className="navButton">Portfolio</a>
        <a href="#activities" className="navButton">Activities</a>
        <a href="#contact" className="navButton">Contact</a>
      </nav>

      <main>
        <section id="about" className="content-section text-center">
          <div className="container px-4 px-lg-5">
            <h2>About</h2>
            <p>
              Hello! My name is Amy Gonzalez and I am a senior at the University of Central Florida studying Computer Science. I am a motivated student with a strong track record of leading teams to success and helping others with their technical challenges. I specialize in aligning technology with business goals and improving operational efficiency. I am interested in full-time positions where I can contribute my skills to innovative projects.
            </p>
          </div>
        </section>

        <section id="education-experience" className="content-section text-center">
          <div className="container px-4 px-lg-5">
            <h2>Education</h2>
            <div className="education-container">
              <div className="education-card card-style" data-target="ucf">
                <img src="assets/img/ucf.jpeg" alt="University of Central Florida" />
                <h3>University of Central Florida</h3>
                <p>Honors Bachelor of Computer Science</p>
                <p>Orlando, Florida | GPA: 3.5</p>
                <p>Expected Graduation: August 2025</p>
              </div>
              <div id="ucf" className="description">
                <p>
                  <strong>Relevant Coursework:</strong><br />
                  Data Structures, Object-Oriented Design, Database Systems, Artificial Intelligence, Algorithms for Machine Learning, Discrete Structures, Operating Systems, System Software
                </p>
              </div>

              <div className="education-card card-style" data-target="whs">
                <img src="assets/img/whs.jpeg" alt="Wiesbaden High School" />
                <h3>Wiesbaden High School</h3>
                <p>Hesse, Germany</p>
              </div>
              <div id="whs" className="description">
                <p>Graduated from Wiesbaden High School in Hesse, Germany.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="content-section text-center">
          <div className="container px-4 px-lg-5">
            <h2>Experience</h2>
            <div className="experience-card card-style" data-target="tesla">
              <img src="assets/img/tesla.svg" alt="Tesla" />
              <h3>Tesla</h3>
              <p>Software Engineer Intern</p>
              <p>Palo Alto, CA | May 2025 - August 2025</p>
            </div>
            <div id="tesla" className="description">
              <ul>
                <li>Designed and built a responsive digital signage management portal using Angular.js and Spring Boot.</li>
                <li>Integrated Samsung MagicInfo APIs via Swagger for real-time scheduling and display monitoring.</li>
                <li>Developed interactive data visualizations for AI insights and Excel export.</li>
              </ul>
            </div>

            <div className="experience-card card-style" data-target="tesla2024">
              <img src="assets/img/tesla.svg" alt="Tesla" />
              <h3>Tesla</h3>
              <p>Software Engineer Intern</p>
              <p>Palo Alto, CA | May 2024 - August 2024</p>
            </div>
            <div id="tesla2024" className="description">
              <ul>
                <li>Built UI dashboards for AV system health and reliability.</li>
                <li>Created CI/CD pipelines using GitHub Actions and Kubernetes.</li>
                <li>Optimized distributed SQL queries in Presto.</li>
                <li>Supported Tesla’s Annual Shareholder Meeting with live AV monitoring tools.</li>
              </ul>
            </div>

            <div className="experience-card card-style" data-target="siemens">
              <img src="assets/img/siemens.jpg" alt="Siemens AG" />
              <h3>Siemens AG</h3>
              <p>Software Engineer Intern</p>
              <p>Orlando, FL | Feb 2023 - Apr 2024</p>
            </div>
            <div id="siemens" className="description">
              <ul>
                <li>Automated compliance workflows using Python, JS, and Power Automate.</li>
                <li>Developed Mendix + React apps for legacy system digitization.</li>
                <li>Led requirements meetings with 50+ stakeholders to streamline trade compliance.</li>
              </ul>
            </div>

            <div className="experience-card card-style" data-target="fsi">
              <img src="assets/img/fsi.png" alt="Florida Space Institute" />
              <h3>Florida Space Institute</h3>
              <p>Software Engineer Intern</p>
              <p>Orlando, FL | Jan 2023 - Mar 2023</p>
            </div>
            <div id="fsi" className="description">
              <ul>
                <li>Programmed Arduino-based vacuum sensor systems.</li>
                <li>Built real-time data visualization tools in Matplotlib and PyQt.</li>
                <li>Collaborated with engineering teams to deliver custom software tools for lab research.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section text-center">
          <div className="container px-4 px-lg-5">
            <h2>Skills</h2>
            <ul>
              <li><strong>Languages:</strong> Java, C/C++, Python, JavaScript, Go, Swift, SQL, HTML/CSS</li>
              <li><strong>Frameworks:</strong> SwiftUI / AppKit, Node.js, React, Spring Boot, Flask, Vue.js</li>
              <li><strong>Tools and DevOps:</strong> Docker, Kubernetes, WebSocket, Xcode, Unity, Figma, Git, Linux, AWS, Final Cut Pro, Photoshop</li>
              <li><strong>Spoken Languages:</strong> Spanish (Bilingual), German (C1 Certified)</li>
            </ul>
          </div>
        </section>

        <section id="portfolio" className="content-section text-center">
          <div className="container px-4 px-lg-5">
            <h2>Portfolio</h2>

            <div className="portfolio-card card-style" data-target="mindmove">
              <img src="assets/img/mindmove.png" alt="MindMove App" />
              <h3>MindMove – Micro-Activity Wellness App</h3>
              <p>July 2025 | Swift, SwiftUI, HealthKit, WatchKit, CoreMotion, Figma</p>
            </div>
            <div id="mindmove" className="description">
              <p>iOS and Apple Watch app that encourages movement via haptic reminders and HealthKit integration.</p>
            </div>

            <div className="portfolio-card card-style" data-target="swiftpoker">
              <img src="assets/img/swiftpoker.png" alt="SwiftPoker App" />
              <h3>SwiftPoker – Multiplayer Poker App</h3>
              <p>May 2025 | Swift, WebSocket, Figma, Git</p>
            </div>
            <div id="swiftpoker" className="description">
              <p>Multiplayer poker game with synchronized game state using WebSockets and SwiftUI design.</p>
            </div>

            <div className="portfolio-card card-style" data-target="notion-cli">
              <img src="assets/img/notion-cli.png" alt="Notion CLI" />
              <h3>Notion CLI Mailbox Manager</h3>
              <p>Dec 2024 | JavaScript, Node.js, Notion API</p>
            </div>
            <div id="notion-cli" className="description">
              <p>Node.js CLI tool to send, receive, and manage messages in Notion like a mailbox.</p>
            </div>
          </div>
        </section>

        <section id="activities" className="content-section text-center">
          <div className="container px-4 px-lg-5">
            <h2>Activities & Accomplishments</h2>
            <ul className="activities-list">
              <li>Society of Hispanic Professional Engineers (SHPE) – Member (2021 – Present)</li>
              <li>Google Developer Student Club Member (2022 - Present)</li>
              <li>Theta Tau Professional Engineering Fraternity (2022 – Present)</li>
              <li>Society of Women Engineers Member (2022 - Present)</li>
              <li>Hack@UCF – Cybersecurity Club Member (2022 – Present)</li>
              <li>Knights of the Turntables Student Lead DJ (2024 - Present)</li>
              <li>UCF Symphony Orchestra – Violin (2024 – 2025)</li>
          </ul>
          </div>
        </section>

        <section id="contact" className="content-section text-center">
          <div className="container px-4 px-lg-5">
            <h2>Contact Me!</h2>
            <p className="lead mb-5">You can reach me at:</p>
            <p className="lead mb-5">Phone: <a href="tel:+18635213869">863-521-3869</a></p>
            <p className="lead mb-5">Email: <a href="mailto:amymariag217@gmail.com">amymariag217@gmail.com</a></p>
            <p className="lead mb-5">LinkedIn: <a href="https://www.linkedin.com/in/amymariegonzalez" target="_blank" rel="noopener noreferrer">linkedin.com/in/amymariegonzalez</a></p>
          </div>
        </section>
      </main>

      <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
          <p className="text-muted small mb-0">&copy; 2024 Amy Marie Gonzalez</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
