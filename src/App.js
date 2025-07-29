import React, { useEffect } from 'react';
import FaultyTerminal from './components/FaultyTerminal';
import './App.css';
import './components/FaultyTerminal.css';

export default function App() {

  /* ---------- Smooth-scroll nav ---------- */
  useEffect(() => {
    document.querySelectorAll('#navButtons a').forEach(btn =>
      btn.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(btn.getAttribute('href'))
          ?.scrollIntoView({ behavior: 'smooth' });
      })
    );
  }, []);

  /* ---------- DATA ---------- */

  /* --- skills grouped by category --- */
  const skillGroups = [
    {
      title: 'Programming Languages',
      items: [
        { name: 'Java',       icon: require('./assets/img/java-icon.png') },
        { name: 'JavaScript', icon: require('./assets/img/javascript-icon.png') },
        { name: 'TypeScript', icon: require('./assets/img/typescript-icon.png') },
        { name: 'Python',     icon: require('./assets/img/python-icon.jpeg') },
        { name: 'C',          icon: require('./assets/img/c-icon.png') },
        { name: 'C++',        icon: require('./assets/img/cpp-icon.png') },
        { name: 'Go',         icon: require('./assets/img/go-icon.png') },
        { name: 'Swift',      icon: require('./assets/img/ios-icon.jpg') },
        { name: 'SQL',        icon: require('./assets/img/sql-icon.png') },
      ],
    },
    {
      title: 'Frameworks / Libraries',
      items: [
        { name: 'React',      icon: require('./assets/img/react-icon.png') },
        { name: 'Node.js',    icon: require('./assets/img/nodejs-icon.png') },
        { name: 'Spring',     icon: require('./assets/img/spring-icon.png') },
        { name: 'Unity',      icon: require('./assets/img/unity-icon.png') },
        { name: 'Arduino',    icon: require('./assets/img/arduino-icon.png') },
      ],
    },
    {
      title: 'Dev Tools & Cloud',
      items: [
        { name: 'Docker',     icon: require('./assets/img/docker-icon.png') },
        { name: 'Kubernetes', icon: require('./assets/img/kubernetes-icon.png') },
        { name: 'AWS',        icon: require('./assets/img/aws-icon.png') },
        { name: 'Git',        icon: require('./assets/img/git-icon.png') },
        { name: 'Slack',      icon: require('./assets/img/slack-icon.png') },
        { name: 'Alteryx',    icon: require('./assets/img/alteryx-icon.png') },
      ],
    },
    {
      title: 'Operating Systems',
      items: [
        { name: 'macOS',      icon: require('./assets/img/macos-icon.png') },
        { name: 'Linux',      icon: require('./assets/img/linux-icon.png') },
        { name: 'Windows',    icon: require('./assets/img/windows-icon.png') },
        { name: 'Android',    icon: require('./assets/img/android-icon.png') },
        { name: 'iOS',        icon: require('./assets/img/ios-icon.png') },
      ],
    },
    {
      title: 'Design / Media',
      items: [
        { name: 'Final Cut Pro', icon: require('./assets/img/finalcut-icon.png') },
        { name: 'Logic Pro',     icon: require('./assets/img/logicpro-icon.png') },
        { name: 'Pixelmator',    icon: require('./assets/img/pixelmator-icon.png') },
        { name: 'Office',        icon: require('./assets/img/office-icon.png') },
        { name: 'HTML',          icon: require('./assets/img/html-icon.png') },
        { name: 'CSS',           icon: require('./assets/img/css-icon.png') },
      ],
    },
  ];

  /* --- experiences with logo --- */
  const experiences = [
    {
      title: 'Tesla',
      logo:  require('./assets/img/tesla.svg'),
      role:  'Software Engineer Intern',
      period:'May – Aug 2025',
      place: 'Palo Alto • CA',
      bullets: [
        'Built Angular + Spring-Boot signage portal (JWT auth).',
        'Integrated AI API & MySQL for live insights + Excel export.',
        'Supported AV for Tesla Shareholder Meeting.',
      ],
    },
    {
      title: 'Tesla',
      logo:  require('./assets/img/tesla.svg'),
      role:  'Software Engineer Intern',
      period:'May – Aug 2024',
      place: 'Palo Alto • CA',
      bullets: [
        'Created AV health dashboards & CI/CD pipelines.',
        'Optimised distributed Presto SQL queries.',
      ],
    },
    {
      title: 'Siemens AG',
      logo:  require('./assets/img/siemens.jpg'),
      role:  'Software Engineer Intern',
      period:'Feb 2023 – Apr 2024',
      place: 'Orlando • FL',
      bullets: [
        'Automated compliance workflows (Python / JS / Power Automate).',
        'Built Mendix + React apps (-60 % legacy process time).',
      ],
    },
    {
      title: 'Florida Space Institute',
      logo:  require('./assets/img/fsi.png'),
      role:  'Software Engineer Intern',
      period:'Jan – Mar 2023',
      place: 'Orlando • FL',
      bullets: [
        'Programmed Arduino vacuum-sensor boards with CSV logging.',
        'Built Matplotlib + PyQt visualisation tools (-35 % analysis time).',
      ],
    },
  ];

  const activities = [
    'SHPE – Member (2021-Present)',
    'Google DSC – Member (2022-Present)',
    'Theta Tau – Member (2022-Present)',
    'SWE – Member (2022-Present)',
    'IEEE UCF Chapter – Member',
    'Hack@UCF – Member',
    'Knights of the Turntables – DJ Lead',
    'UCF Symphony Orchestra – Violin',
  ];

  const portfolio = [
    {
      title: 'MindMove – Wellness App',
     // img: require('./assets/img/mindmove.png'),
      tech:'SwiftUI · HealthKit · WatchKit',
      desc:'iOS/watchOS app that triggers micro-activity breaks with haptics.',
    },
    {
      title: 'OceanOps – Multiplayer Battleship',
      //img: require('./assets/img/oceanops.png'),
      tech:'Swift · WebSocket · Figma',
      desc:'Real-time shared-state battleship with rule engine and live chat.',
    },
  ];

  /* ---------- JSX ---------- */
  return (
    <div className="App">

      {/* ---------- Terminal background ---------- */}
      <div className="faulty-terminal-container">
        <FaultyTerminal
          scale={1.5} gridMul={[2,1]} digitSize={1.2} timeScale={0.5}
          scanlineIntensity={0.5} tint="#C3B1E1" mouseReact mouseStrength={0.5}
          noiseAmp={1} curvature={0.1} brightness={0.6}
        />
      </div>

      {/* ---------- Site content ---------- */}
      <div className="site-content">
        <header className="masthead">
          <h1>Amy Marie Gonzalez</h1><hr />
        </header>

        {/* ---------- NAV ---------- */}
        <nav id="navButtons">
          {['About','Education','Experience','Skills','Portfolio','Activities','Contact'].map(id=>(
            <a key={id} href={'#'+id.toLowerCase()} className="navButton">{id}</a>
          ))}
        </nav>

        <main>

          {/* ===== ABOUT ===== */}
          <section id="about" className="content-section">
            <div className="info-card">
              <h2>About Me</h2>
              <p>
                Hello, my name is Amy Gonzalez and I am a Senior Honors Computer Science student at the University of Central Florida Graduating in December 2025. 
                I am passionate about software engineering, particularly in the areas of AI, full-stack, and iOS development.
              </p>
            </div>
          </section>

          {/* ===== EDUCATION ===== */}
          <section id="education" className="content-section">
            <div className="info-card">
              <h2>Education</h2>
              <div className="cards-container">

                {/* UCF */}
                <FlipCard
                  front={<>
                    <h3>University of Central Florida</h3>
                    <p>Honors B.S. Computer Science</p>
                    <p>Aug 2021 – Dec 2025</p>
                  </>}
                  back={<>
                    <p><strong>Relevant coursework</strong></p>
                    <p>Data Structures · OOD · DB Systems · AI · ML · OS</p>
                  </>}
                />

                {/* WHS */}
                <FlipCard
                  front={<>
                    <h3>Wiesbaden High School</h3>
                    <p>Hesse, Germany</p>
                    <p>Graduated May 2021</p>
                  </>}
                  back={<p>DoDEA High-School Diploma.</p>}
                />
              </div>
            </div>
          </section>

          {/* ===== EXPERIENCE ===== */}
          <section id="experience" className="content-section">
            <div className="info-card">
              <h2>Experience</h2>
              <div className="cards-container">
                {experiences.map(exp => (
                  <FlipCard key={exp.title}
                    front={<>
                      <img src={exp.logo} alt={exp.title} style={{width:60,marginBottom:8}}/>
                      <h3>{exp.title}</h3>
                      <p>{exp.role}</p>
                      <p>{exp.period}</p>
                      <p>{exp.place}</p>
                    </>}
                    back={<ul>{exp.bullets.map(b=><li key={b}>{b}</li>)}</ul>}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ===== SKILLS ===== */}
          <section id="skills" className="content-section">
            <div className="info-card">
              <h2>Skills</h2>
              {skillGroups.map(group=>(
                <div key={group.title} style={{marginTop:'2rem'}}>
                  <h3>{group.title}</h3>
                  <div className="skills-container">
                    {group.items.map(s=>(
                      <div className="skill-card" key={s.name}>
                        <img src={s.icon} alt={s.name}/>
                        <h4>{s.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== PORTFOLIO ===== */}
          <section id="portfolio" className="content-section">
            <div className="info-card">
              <h2>Portfolio</h2>
              <div className="cards-container">
                {portfolio.map(p=>(
                  <FlipCard key={p.title}
                    front={<>
                      <img src={p.img} alt={p.title}
                           style={{width:'80%',borderRadius:8,marginBottom:8}} />
                      <h3>{p.title}</h3>
                      <p>{p.tech}</p>
                    </>}
                    back={<p>{p.desc}</p>}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ===== ACTIVITIES ===== */}
          <section id="activities" className="content-section">
            <div className="info-card">
              <h2>Activities & Accomplishments</h2>
              <ul className="activities-list">
                {activities.map(a=> <li key={a}>{a}</li>)}
              </ul>
            </div>
          </section>

          {/* ===== CONTACT ===== */}
          <section id="contact" className="content-section">
            <div className="info-card">
              <h2>Contact Me</h2>
              <p>Email:&nbsp;
                <a href="mailto:amymariag217@gmail.com">amymariag217@gmail.com</a>
              </p>
              <p>LinkedIn:&nbsp;
                <a href="https://linkedin.com/in/amymariegonzalez" target="_blank"
                   rel="noopener noreferrer">
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

/* ---------- Tiny flip-card helper component ---------- */
function FlipCard({ front, back }) {
  return (
    <div className="flip-card"
         onClick={e=>e.currentTarget.classList.toggle('flipped')}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
}
