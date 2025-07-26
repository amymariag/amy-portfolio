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
                <p>Expected Graduation: December 2025</p>
              </div>
              <div id="ucf" className="description">
                <p>
                  <strong>Relevant Coursework:</strong><br />
                  Computer Science II, Advanced Data Structures, Object-Oriented Programming, Artificial Intelligence, Computer Logic and Organization, Algorithms for Machine Learning, Systems Software, Database Systems, Discrete Structures
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
              <p>Software Engineering Intern</p>
              <p>Palo Alto, CA | May 2024 - August 2024</p>
            </div>
            <div id="tesla" className="description">
              <ul>
                <li>Developed Python scripts (using <code>requests</code> and <code>pandas</code>) to automate data entry and retrieval, enhancing efficiency in data organization.</li>
                <li>Created an internal website (HTML/CSS/JavaScript) to streamline repair request processes across Tesla’s North American sites, reducing response times significantly.</li>
                <li>Coordinated live AV systems for Tesla’s Annual Shareholder’s Event, ensuring seamless experiences for over 600 in-person attendees and millions of online viewers.</li>
                <li>Contributed to Tesla’s brand by implementing technical solutions that optimized communication and minimized downtime.</li>
              </ul>
            </div>

            <div className="experience-card" data-target="siemens">
              <img src="assets/img/siemens.jpg" alt="Siemens AG" />
              <h3>Siemens AG</h3>
              <p>Technical Software Intern</p>
              <p>Orlando, FL | February 2023 - April 2024</p>
            </div>
            <div id="siemens" className="description">
              <ul>
                <li>Built a Full Stack Dashboard with React and Kotlin for trade compliance data visualization, cutting query time by 50%.</li>
                <li>Automated data transformations with custom Python and SQL scripts in Alteryx, reducing processing time by 60% and boosting decision-making accuracy.</li>
                <li>Developed applications with Mendix and React to digitize document management, achieving a 50% increase in team efficiency.</li>
                <li>Leveraged Power Automate to optimize workflows like file uploads and data synchronization, enhancing operational performance.</li>
              </ul>
            </div>

            <div className="experience-card" data-target="fsi">
              <img src="assets/img/fsi.png" alt="Florida Space Institute" />
              <h3>Florida Space Institute</h3>
              <p>Software Engineering Intern</p>
              <p>Orlando, FL | January 2023 - April 2023</p>
            </div>
            <div id="fsi" className="description">
              <ul>
                <li>Designed Arduino code to interface with vacuum pressure sensors, enabling real-time monitoring for experimental chambers.</li>
                <li>Integrated software with lab equipment using serial communication protocols and libraries (Matplotlib, PyQt) for live data visualization.</li>
                <li>Collaborated with multidisciplinary teams to develop custom software solutions for space research, improving experimental accuracy.</li>
                <li>Implemented analog-to-digital conversion algorithms for precise measurement of pressure levels, aiding critical space research.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section bg-primary text-white text-center">
          <div className="container px-4 px-lg-5">
            <h2>Skills</h2>
            <div className="skills-container">
              {/* List skill cards here, similar to above */}
            </div>
          </div>
        </section>

        <section id="portfolio" className="content-section text-center">
          <div className="container px-4 px-lg-5">
            <h2>Portfolio</h2>
            <div className="portfolio-card" data-target="notion-cli">
              <img src="assets/img/notion-cli.png" alt="Notion CLI Mailbox Manager" />
              <h3>Notion CLI Mailbox Manager</h3>
              <p>December 2024 | JavaScript, Node.js, Notion API</p>
            </div>
            <div id="notion-cli" className="description">
              <p>Developed a Node.js CLI tool to interact with a Notion database, enabling mailbox-like message handling with secure API integration.</p>
            </div>
            {/* Continue other portfolio items */}
          </div>
        </section>

        <section id="activities" className="content-section bg-light text-center">
          <div className="container px-4 px-lg-5">
            <h2>Activities & Accomplishments</h2>
            <ul className="activities-list">
              <li>Theta Tau Professional Engineering Fraternity - Academic Chair (2024 - Present)</li>
              <li>Society of Hispanic Professional Engineers (2021 - Present)</li>
              {/* Continue list items */}
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
