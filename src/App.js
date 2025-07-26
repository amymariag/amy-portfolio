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
      <Galaxy transparent mouseInteraction />

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
        <section id="about" className="content-section bg-light text-center">
          <div className="container px-4 px-lg-5">
            <h2>About</h2>
            <p>
              Hello! My name is Amy Gonzalez and I am a senior at the University of Central Florida studying Computer Science. I am a motivated student with a strong track record of leading teams to success and helping others with their technical challenges. I specialize in aligning technology with business goals and improving operational efficiency. I am interested in full-time positions where I can contribute my skills to innovative projects.
            </p>
          </div>
        </section>

        <section id="education-experience" className="content-section bg-light text-center">
          <div className="container px-4 px-lg-5">
            <h2>Education</h2>
            <div className="education-container">
              <div className="education-card" data-target="ucf">
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

              <div className="education-card" data-target="whs">
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

        <section id="experience" className="content-section bg-light text-center">
          <div className="container px-4 px-lg-5">
            <h2>Experience</h2>
            <div className="experience-card" data-target="tesla">
              <img src="assets/img/tesla.svg" alt="Tesla" />
              <h3>Tesla</h3>
              <p>Software Engineer Intern</p>
              <p>Palo Alto, CA | May 2025 - August 2025</p>
            </div>
            <div id="tesla" className="description">
              <ul>
                <li>Designed and built a responsive digital signage management portal using Angular.js and Spring Boot, improving usability for AV technicians managing global content displays.</li>
                <li>Integrated Samsung MagicInfo APIs via Swagger to power real-time scheduling, playback control, and system monitoring for digital displays.</li>
                <li>Developed interactive data visualizations for AI-generated insights using frontend chart libraries.</li>
              </ul>
            </div>

            <div className="experience-card" data-target="tesla2024">
              <img src="assets/img/tesla.svg" alt="Tesla" />
              <h3>Tesla</h3>
              <p>Software Engineer Intern</p>
              <p>Palo Alto, CA | May 2024 - August 2024</p>
            </div>
            <div id="tesla2024" className="description">
              <ul>
                <li>Created internal UI dashboards for AV system health and reliability, improving information clarity and reducing troubleshooting time for engineers.</li>
                <li>Built CI/CD pipelines for automated frontend deployments using GitHub Actions and Kubernetes.</li>
                <li>Optimized distributed SQL queries in Presto, improving query performance by 20%.</li>
                <li>Supported Tesla’s 2024 Annual Shareholder Meeting with live AV monitoring tools.</li>
              </ul>
            </div>

            <div className="experience-card" data-target="siemens">
              <img src="assets/img/siemens.jpg" alt="Siemens AG" />
              <h3>Siemens AG</h3>
              <p>Software Engineer Intern</p>
              <p>Orlando, FL | February 2023 - April 2024</p>
            </div>
            <div id="siemens" className="description">
              <ul>
                <li>Automated compliance data workflows using Python, JavaScript, and Power Automate, eliminating manual processing of 5,000+ monthly transactions.</li>
                <li>Developed Mendix apps with React components to digitize legacy processes.</li>
                <li>Led requirements meetings with 50+ stakeholders to improve compliance tools.</li>
              </ul>
            </div>

            <div className="experience-card" data-target="fsi">
              <img src="assets/img/fsi.png" alt="Florida Space Institute" />
              <h3>Florida Space Institute</h3>
              <p>Software Engineer Intern</p>
              <p>Orlando, FL | January 2023 - March 2023</p>
            </div>
            <div id="fsi" className="description">
              <ul>
                <li>Programmed Arduino-based systems to collect and log real-time vacuum sensor data.</li>
                <li>Built interactive visualization tools with Matplotlib and PyQt for rapid analysis.</li>
                <li>Collaborated with engineering teams to deliver integrated research solutions.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section bg-primary text-white text-center">
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

            <div className="portfolio-card" data-target="mindmove">
              <img src="assets/img/mindmove.png" alt="MindMove App" />
              <h3>MindMove – Micro-Activity Wellness App</h3>
              <p>July 2025 | Swift, SwiftUI, HealthKit, WatchKit, CoreMotion, Figma</p>
            </div>
            <div id="mindmove" className="description">
              <p>Created an iOS and Apple Watch app that encourages short movement breaks throughout the day by detecting sedentary patterns via HealthKit and CoreMotion; delivered haptic reminders and tracked streaks in SwiftUI.</p>
            </div>

            <div className="portfolio-card" data-target="swiftpoker">
              <img src="assets/img/swiftpoker.png" alt="SwiftPoker App" />
              <h3>SwiftPoker – Multiplayer Poker App</h3>
              <p>May 2025 | Swift, WebSocket, Figma, Git</p>
            </div>
            <div id="swiftpoker" className="description">
              <p>Built a multiplayer iOS game in Swift with synchronized game state via WebSockets and UI flows designed in Figma.</p>
            </div>

            <div className="portfolio-card" data-target="notion-cli">
              <img src="assets/img/notion-cli.png" alt="Notion CLI Mailbox Manager" />
              <h3>Notion CLI Mailbox Manager</h3>
              <p>December 2024 | JavaScript, Node.js, Notion API</p>
            </div>
            <div id="notion-cli" className="description">
              <p>Developed a Node.js CLI tool to interact with a Notion database, enabling mailbox-like message handling with secure API integration.</p>
            </div>
          </div>
        </section>

        <section id="activities" className="content-section bg-light text-center">
          <div className="container px-4 px-lg-5">
            <h2>Activities & Accomplishments</h2>
            <ul className="activities-list">
              <li>Theta Tau Professional Engineering Fraternity - Academic Chair (2024 - Present)</li>
              <li>Society of Hispanic Professional Engineers (2021 - Present)</li>
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
