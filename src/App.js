import React, { useEffect } from 'react';
import FaultyTerminal from './components/FaultyTerminal';
import './App.css';
import './components/FaultyTerminal.css';

export default function App() {
  /* ---------- Smooth-scroll nav ---------- */
  useEffect(() => {
    document.querySelectorAll('#navButtons a').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(btn.getAttribute('href'))
          ?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  /* ---------- Data ---------- */
  const skills = [
    { name: 'Java',       icon: './assets/img/java-icon.png' },
    { name: 'JavaScript', icon: './assets/img/javascript-icon.png' },
    { name: 'Python',     icon: './assets/img/python-icon.jpeg' },
    { name: 'React',      icon: '/assets/img/react-icon.png' },
    { name: 'Node.js',    icon: '/assets/img/nodejs-icon.png' },
    { name: 'Spring',     icon: '/assets/img/spring-icon.png' },
    { name: 'Docker',     icon: '/assets/img/docker-icon.png' },
    { name: 'Kubernetes', icon: '/assets/img/kubernetes-icon.png' },
    { name: 'AWS',        icon: '/assets/img/aws-icon.png' },
    { name: 'Git',        icon: '/assets/img/git-icon.png' },
  ];

  const experiences = [
    {
      title: 'Tesla – Software Engineer Intern',
      period: 'May – Aug 2025',
      place: 'Palo Alto, CA',
      bullets: [
        'Built full-stack portal (Angular + Spring Boot, JWT auth).',
        'Integrated AI API & MySQL for live insights + Excel export.',
        'Supported AV for Tesla Shareholder Meeting.',
      ],
    },
    {
      title: 'Tesla – Software Engineer Intern',
      period: 'May – Aug 2024',
      place: 'Palo Alto, CA',
      bullets: [
        'Created AV health dashboards & CI/CD pipelines.',
        'Optimised distributed Presto SQL queries.',
      ],
    },
    {
      title: 'Siemens AG – Software Engineer Intern',
      period: 'Feb 2023 – Apr 2024',
      place: 'Orlando, FL',
      bullets: [
        'Automated compliance workflows (Python / JS / Power Automate).',
        'Built Mendix + React apps, speeding legacy processes 60 %.',
      ],
    },
    {
      title: 'Florida Space Institute – Software Engineer Intern',
      period: 'Jan – Mar 2023',
      place: 'Orlando, FL',
      bullets: [
        'Programmed Arduino vacuum-sensor boards with CSV logging.',
        'Made Matplotlib + PyQt visualisation tools (-35 % analysis time).',
      ],
    },
  ];

  const activities = [
    'SHPE – Member (2021-Present)',
    'Google DSC – Member (2022-Present)',
    'Theta Tau – Member (2022-Present)',
    'SWE – Member (2022-Present)',
    'IEEE UCF Chapter – Member (2022-Present)',
    'Hack@UCF – Member (2022-Present)',
    'Knights of the Turntables – DJ Lead (2024-Present)',
    'UCF Symphony Orchestra – Violin (2024-2025)',
  ];

  const portfolio = [
    {
      title: 'MindMove – Wellness App',
      tech: 'SwiftUI · HealthKit · WatchKit',
      img: '/assets/img/mindmove.png',
      desc: 'iOS/watchOS app that triggers micro-activity breaks with haptics.',
    },
    {
      title: 'OceanOps – Multiplayer Battleship',
      tech: 'Swift · WebSocket · Figma',
      img: '/assets/img/oceanops.png',
      desc: 'Real-time shared-state battleship with rule engine and live chat.',
    },
  ];

  return (
    <div className="App">
      {/* -------- Shader background -------- */}
      <div className="faulty-terminal-container">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2,1]}
          digitSize={1.2}
          timeScale={0.5}
          scanlineIntensity={0.5}
          tint="#C3B1E1"
          mouseReact
          mouseStrength={0.5}
          noiseAmp={1}
          curvature={0.1}
          brightness={0.6}
        />
      </div>

      {/* -------- Content -------- */}
      <div className="site-content">
        <header className="masthead">
          <h1>Amy Marie Gonzalez</h1>
          <hr/>
        </header>

        <nav id="navButtons">
          <a href="#about"      className="navButton">About</a>
          <a href="#education"  className="navButton">Education</a>
          <a href="#experience" className="navButton">Experience</a>
          <a href="#skills"     className="navButton">Skills</a>
          <a href="#portfolio"  className="navButton">Portfolio</a>
          <a href="#activities" className="navButton">Activities</a>
          <a href="#contact"    className="navButton">Contact</a>
        </nav>

        <main>
          {/* ----- ABOUT ----- */}
          <section id="about" className="content-section">
            <div className="info-card">
              <h2>About Me</h2>
              <p>
                Senior Honors Computer Science student at UCF (Dec 2025).
                Passionate about building polished, human-centric software—from
                full-stack web to native iOS.
              </p>
            </div>
          </section>

          {/* ----- EDUCATION ----- */}
          <section id="education" className="content-section">
            <div className="info-card">
              <h2>Education</h2>
              <div className="cards-container">
                {/* UCF */}
                <div className="flip-card" onClick={e=>e.currentTarget.classList.toggle('flipped')}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h3>University of Central Florida</h3>
                      <p>Honors B.S. Computer Science</p>
                      <p>Aug 2021 – Dec 2025</p>
                    </div>
                    <div className="flip-card-back">
                      <p><strong>Relevant coursework:</strong></p>
                      <p>Data Structures · OOD · DB Systems · AI · ML Algorithms · OS</p>
                    </div>
                  </div>
                </div>

                {/* Wiesbaden HS */}
                <div className="flip-card" onClick={e=>e.currentTarget.classList.toggle('flipped')}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h3>Wiesbaden High School</h3>
                      <p>Hesse, Germany</p>
                      <p>Graduated May 2021</p>
                    </div>
                    <div className="flip-card-back">
                      <p>DoDEA High-School Diploma.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ----- EXPERIENCE ----- */}
          <section id="experience" className="content-section">
            <div className="info-card">
              <h2>Experience</h2>
              <div className="cards-container">
                {experiences.map(exp=>(
                  <div key={exp.title} className="flip-card"
                       onClick={e=>e.currentTarget.classList.toggle('flipped')}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <h3>{exp.title}</h3>
                        <p>{exp.period}</p>
                        <p>{exp.place}</p>
                      </div>
                      <div className="flip-card-back">
                        <ul>{exp.bullets.map(b=><li key={b}>{b}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ----- SKILLS ----- */}
          <section id="skills" className="content-section">
            <div className="info-card">
              <h2>Skills</h2>
              <div className="skills-container">
                {skills.map(s=>(
                  <div className="skill-card" key={s.name}>
                    <img src={s.icon} alt={s.name}/>
                    <h4>{s.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ----- PORTFOLIO ----- */}
          <section id="portfolio" className="content-section">
            <div className="info-card">
              <h2>Portfolio</h2>
              <div className="cards-container">
                {portfolio.map(p=>(
                  <div key={p.title} className="flip-card"
                       onClick={e=>e.currentTarget.classList.toggle('flipped')}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={p.img} alt={p.title} style={{width:'80%', borderRadius:8, marginBottom:8}} />
                        <h3 style={{margin:'0.5rem 0'}}>{p.title}</h3>
                        <p>{p.tech}</p>
                      </div>
                      <div className="flip-card-back">
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ----- ACTIVITIES ----- */}
          <section id="activities" className="content-section">
            <div className="info-card">
              <h2>Activities & Accomplishments</h2>
              <ul className="activities-list">
                {activities.map(a=> <li key={a}>{a}</li>)}
              </ul>
            </div>
          </section>

          {/* ----- CONTACT ----- */}
          <section id="contact" className="content-section">
            <div className="info-card">
              <h2>Contact Me</h2>
              <p>Email: <a href="mailto:amymariag217@gmail.com">amymariag217@gmail.com</a></p>
              <p>LinkedIn:&nbsp;
                <a href="https://linkedin.com/in/amymariegonzalez" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/amymariegonzalez
                </a>
              </p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>© 2025 Amy Marie Gonzalez</p>
        </footer>
      </div>
    </div>
  );
}
