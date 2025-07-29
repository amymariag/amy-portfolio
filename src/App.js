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

  const education = [
    {
      title: 'University of Central Florida',
      subtitle: 'Honors B.S. Computer Science | Orlando, FL | GPA: 3.5',
      date: 'Aug 2021 – Dec 2025',
      details:
        'Data Structures, Object-Oriented Design, Database Systems, AI, Algorithms for Machine Learning, Discrete Structures, Operating Systems',
    },
    {
      title: 'Wiesbaden High School',
      subtitle: 'Hesse, Germany',
      date: 'Graduated May 2021',
      details: '',
    },
  ];

  const skills = [
    { name: 'Java',       icon: '/assets/img/java-icon.png' },
    { name: 'C/C++',      icon: '/assets/img/cpp-icon.png' },
    { name: 'Python',     icon: '/assets/img/python-icon.jpeg' },
    { name: 'JavaScript', icon: '/assets/img/javascript-icon.png' },
    { name: 'TypeScript', icon: '/assets/img/typescript-icon.png' },
    { name: 'React',      icon: '/assets/img/react-icon.png' },
    { name: 'Node.js',    icon: '/assets/img/nodejs-icon.png' },
    { name: 'Spring Boot',icon: '/assets/img/spring-icon.png' },
    { name: 'Docker',     icon: '/assets/img/docker-icon.png' },
    { name: 'Kubernetes', icon: '/assets/img/kubernetes-icon.png' },
    { name: 'AWS',        icon: '/assets/img/aws-icon.png' },
    { name: 'Git',        icon: '/assets/img/git-icon.png' },
    { name: 'Figma',      icon: '/assets/img/figma-icon.png' },
    { name: 'Linux',      icon: '/assets/img/linux-icon.png' },
    { name: 'Spanish',    icon: '/assets/img/spanish-icon.png' },
    { name: 'German',     icon: '/assets/img/german-icon.png' },
  ];

  const experiences = [
    {
      title: 'Tesla – Software Engineer Intern (May–Aug 2025)',
      location: 'Palo Alto, CA',
      bullets: [
        'Engineered full-stack portal with Angular.js & Spring Boot, JWT auth + SMTP email verification.',
        'Integrated AI API + MySQL backend for real-time insights, Excel export & charting.',
        'Optimized SQL queries, resolved data bugs, and maintained live AV tools for events.',
      ],
    },
    {
      title: 'Tesla – Software Engineer Intern (May–Aug 2024)',
      location: 'Palo Alto, CA',
      bullets: [
        'Built AV health & reliability dashboards.',
        'Created CI/CD pipelines with GitHub Actions & Kubernetes.',
        'Optimized distributed SQL queries in Presto.',
      ],
    },
    {
      title: 'Siemens AG – Software Engineer Intern (Feb 2023–Apr 2024)',
      location: 'Orlando, FL',
      bullets: [
        'Automated compliance workflows with Python, JS & Power Automate.',
        'Developed Mendix + React apps for legacy system digitization.',
        'Led stakeholder requirements meetings (50+ attendees).',
      ],
    },
    {
      title: 'Florida Space Institute – Software Engineer Intern (Jan–Mar 2023)',
      location: 'Orlando, FL',
      bullets: [
        'Programmed Arduino vacuum sensors with data logging.',
        'Built real-time visualization tools in Matplotlib & PyQt.',
        'Collaborated with engineers on lab research software.',
      ],
    },
  ];

  const activities = [
    'Society of Hispanic Professional Engineers (SHPE) – Member (2021–Present)',
    'Google Developer Student Club – Member (2022–Present)',
    'Theta Tau Professional Engineering Fraternity – Member (2022–Present)',
    'Society of Women Engineers (SWE) – Member (2022–Present)',
    'IEEE UCF Chapter – Member (2022–Present)',
    'Hack@UCF Cybersecurity Club – Member (2022–Present)',
    'Knights of the Turntables – Student DJ Lead (2024–Present)',
    'UCF Symphony Orchestra – Violin (2024–2025)',
  ];

  return (
    <div className="App">
      {/* Terminal shader background */}
      <div className="faulty-terminal-container">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#C3B1E1"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={0.6}
        />
      </div>

      {/* Centered site content */}
      <div className="site-content">
        <header className="masthead">
          <h1 id="name">Amy Marie Gonzalez</h1>
          <hr />
        </header>

        <nav id="navButtons">
          {[
            ['#about','About'],
            ['#education','Education'],
            ['#skills','Skills'],
            ['#experience','Experience'],
            ['#activities','Activities'],
            ['#contact','Contact'],
          ].map(([href,label])=>(
            <a key={href} href={href} className="navButton">{label}</a>
          ))}
        </nav>

        <main>
          {/* ABOUT */}
          <section id="about" className="content-section">
            <div className="info-card">
              <h2>About Me</h2>
              <p>
                Hi! I'm Amy Gonzalez, a Senior Honors Computer Science student at UCF (Dec 2025).
                Passionate about creative software engineering—design, problem-solving, and impact.
              </p>
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" className="content-section">
            <div className="info-card">
              <h2>Education</h2>
              <div className="education-container">
                {education.map((edu,i)=>(
                  <div
                    key={i}
                    className="flip-card"
                    onClick={e=>e.currentTarget.classList.toggle('flipped')}
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front card-style">
                        <h3>{edu.title}</h3>
                        <p>{edu.subtitle}</p>
                        <p>{edu.date}</p>
                      </div>
                      <div className="flip-card-back card-style">
                        {edu.details && <p><strong>Relevant Coursework:</strong> {edu.details}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="content-section">
            <div className="info-card">
              <h2>Skills</h2>
              <div className="skills-container">
                {skills.map(s=>(
                  <div className="skill-card" key={s.name}>
                    <img src={s.icon} alt={s.name} />
                    <h4>{s.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="content-section">
            <div className="info-card">
              <h2>Experience</h2>
              <div className="experience-container">
                {experiences.map(exp=>(
                  <div
                    key={exp.title}
                    className="flip-card"
                    onClick={e=>e.currentTarget.classList.toggle('flipped')}
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front card-style">
                        <h3>{exp.title}</h3>
                        <p>{exp.location}</p>
                      </div>
                      <div className="flip-card-back card-style">
                        <ul>
                          {exp.bullets.map((b,i)=><li key={i}>{b}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ACTIVITIES */}
          <section id="activities" className="content-section">
            <div className="info-card">
              <h2>Activities & Accomplishments</h2>
              <ul className="activities-list">
                {activities.map(a=><li key={a}>{a}</li>)}
              </ul>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="content-section">
            <div className="info-card">
              <h2>Contact Me</h2>
              <p>Email: <a href="mailto:amymariag217@gmail.com">amymariag217@gmail.com</a></p>
              <p>LinkedIn: <a href="https://linkedin.com/in/amymariegonzalez" target="_blank" rel="noopener noreferrer">linkedin.com/in/amymariegonzalez</a></p>
              <p>GitHub: <a href="https://github.com/amymariag" target="_blank">github.com/amymariag</a></p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© 2025 Amy Marie Gonzales</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
