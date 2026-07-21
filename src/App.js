import React, { useEffect } from 'react';
import FaultyTerminal from './components/FaultyTerminal';
import './App.css';
import './components/FaultyTerminal.css';

export default function App() {

  useEffect(() => {
    const btns = Array.from(document.querySelectorAll('#navButtons a'));
    const onClick = e => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    btns.forEach(b => b.addEventListener('click', onClick));
    return () => btns.forEach(b => b.removeEventListener('click', onClick));
  }, []);

  const skillGroups = [
    {
      title: 'Programming Languages',
      items: [
        { name: 'Java',       icon: require('./assets/img/java-icon.png') },
        { name: 'JavaScript', icon: require('./assets/img/javascript-icon.png') },
        { name: 'TypeScript', icon: require('./assets/img/typescript-icon.png') },
        { name: 'Python',     icon: require('./assets/img/python-icon.jpeg') },
        { name: 'C',          icon: require('./assets/img/c-icon.png') },
        { name: 'Swift',      icon: require('./assets/img/ios-icon.jpg') },
        { name: 'SQL',        icon: require('./assets/img/sql-icon.png') },
        { name: 'HTML/CSS',   icon: require('./assets/img/html-icon.png') },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'React',       icon: require('./assets/img/react-icon.png') },
        { name: 'React Native', icon: require('./assets/img/react-icon.png') },
        { name: 'Node.js',     icon: require('./assets/img/nodejs-icon.png') },
        { name: 'SwiftUI',     icon: require('./assets/img/ios-icon.png') },
        { name: 'Spring Boot', icon: require('./assets/img/spring-icon.png') },
      ],
    },
    {
      title: 'Dev Tools & Cloud',
      items: [
        { name: 'Docker',     icon: require('./assets/img/docker-icon.png') },
        { name: 'AWS',        icon: require('./assets/img/aws-icon.png') },
        { name: 'Git',        icon: require('./assets/img/git-icon.png') },
        { name: 'Slack',      icon: require('./assets/img/slack-icon.png') },
        { name: 'Jira',       icon: require('./assets/img/jira.png') },
        { name: 'Figma',      icon: require('./assets/img/figma-icon.png') },
        { name: 'Final Cut Pro', icon: require('./assets/img/finalcut-icon.png') },
        { name: 'Logic Pro', icon: require('./assets/img/logicpro-icon.png') },
      ],
    },
    {
      title: 'Spoken Languages',
      items: [
        { name: 'Spanish (Bilingual)', icon: require('./assets/img/spanish-icon.png') },
        { name: 'German (C1)',  icon: require('./assets/img/german-icon.png') },
      ],
    },
  ];

  /* --- experiences (simplified - just company, dates, icon) --- */
  const experiences = [
    {
      id:     'tesla-2024-2025',
      title:  'Tesla',
      logo:   require('./assets/img/tesla-icon.png'),
      role:   'Software Engineer Intern',
      period: 'May 2024 - Aug 2024, May 2025 - Aug 2025',
      place:  'Palo Alto, California',
    },
    {
      id:     'siemens-intern',
      title:  'Siemens',
      logo:   require('./assets/img/siemens.jpg'),
      role:   'Software Engineer Intern',
      period: 'Feb 2023 – Apr 2024',
      place:  'Orlando, Florida',
    },
    {
      id:     'fsi-intern',
      title:  'Florida Space Institute',
      logo:   require('./assets/img/fsi.png'),
      role:   'Software Engineer Intern',
      period: 'Jan 2023 – Mar 2023',
      place:  'Orlando, Florida',
    },
  ];

  const activities = [
    'UCF Society of Women Engineers',
    'Burnett Honors College',
    'UCF Golf Club',
    'Google Student Developer Club',
    'UCF Society of Hispanic Professional Engineers',
    'KnightHacks',
    'Theta Tau Professional Engineering Club',
    'UCF IEEE',
    'UCF Symphony Orchestra - Violin',
    'Knights of the Turntables - DJ',
  ];

  const portfolio = [
    {
      id:    'digital-garden',
      title: 'Digital Garden',
      emoji: '🌸',
      tech:  'React · Swift/SwiftUI · Node.js/Express · MongoDB',
      desc:  'Building a web and iOS platform for sharing and discovering what friends are into. Features garden themed profile pages where users can cultivate their interests, with a React frontend, SwiftUI mobile app, and Node.js backend.',
      date:  'February 2026',
    },
    {
      id:    'campus-critters',
      title: 'Campus Critters',
      emoji: '🐊',
      tech:  'Flutter · PostgreSQL · Azure · Google Maps API · Python/ML',
      desc:  'Built a cross platform app for students to share wildlife sightings on campus, integrating Google Maps, Google Gemini API, cloud storage, and machine learning models for photo classification.',
      date:  'December 2025',
    },
    {
      id:    'vanity-vinyl',
      title: 'Vanity Vinyl',
      emoji: '💿',
      tech:  'Swift/SwiftUI · Core Data · Firebase · VisionKit · Core Location',
      desc:  'Built an iOS app for record collectors to scan albums, catalog collections with Core Data, and connect with nearby users via Firebase powered listings and chat.',
      date:  'August 2025',
    },
    {
      id:    'mindmove',
      title: 'MindMove',
      img:   require('./assets/img/mindmove.png'),
      tech:  'SwiftUI · HealthKit · WatchKit',
      desc:  'Created an iOS and Apple Watch app that encourages short movement breaks throughout the day by detecting sedentary patterns via HealthKit and CoreMotion.',
      date:  'June 2025',
    },
    {
      id:    'ieee-speaker',
      title: 'Bluetooth Speaker Project',
      emoji: '🔊',
      tech:  'C/C++ · Embedded Systems · Arduino · Bluetooth · Circuit Design',
      desc:  'Developed a portable speaker system by assembling drivers, amplifier circuits, and enclosure design, while programming a microcontroller for wireless audio streaming and volume control.',
      date:  'March 2025',
    },
  ];

  const ucfLogo = require('./assets/img/ucf_.jpg');
  const whsLogo = require('./assets/img/whs.png');


  return (
    <div className="App">

      {/* ---------- Terminal background ---------- */}
      <div className="faulty-terminal-container">
        <FaultyTerminal
             scale={1.2}
             digitSize={2.4}
             scanlineIntensity={0.4}
             glitchAmount={0.7}
             flickerAmount={1}
             noiseAmp={0}
             chromaticAberration={0}
             dither={0}
             curvature={0.2}
             tint="#ffffff"
             mouseReact
             mouseStrength={0.2}
             brightness={0.7}
        />
      </div>

      {/* ---------- Site content ---------- */}
      <div className="site-content">
        
        {/* ===== HERO SECTION (Name + Photos + About + Nav) ===== */}
        <section id="hero" className="hero-section">
          <div className="hero-header-container">
            
            <header className="masthead">
              <h1>Amy Marie Gonzalez</h1>
              <div className="subtitle">Software Engineer | Full-Stack & iOS Developer</div>
            </header>
            <div className="hero-image hero-image-right">
              <img src={require('./assets/img/amy-grad-2.jpg')} alt="Amy Gonzalez UCF Graduation" />
            </div>
          </div>

          {/* About Me - Front and Center */}
          <div className="hero-about">
            <p>
              Hello! I'm Amy Gonzalez, a Computer Science Graduate from the University of Central Florida and 2x Tesla Software Engineering Intern. I code both for fun and to cultivate new solutions to make life easier. Nice to meet you!
            </p>
          </div>

          {/* Navigation - Prominent and Easy to See */}
          <nav id="navButtons">
            {['Education','Experience','Skills','Portfolio','Activities','Contact'].map(id=>(
              <a key={id} href={'#'+id.toLowerCase()} className="navButton">{id}</a>
            ))}
          </nav>
        </section>

        <main>

          {/* ===== EDUCATION ===== */}
          <section id="education" className="content-section">
            <div className="info-card">
              <h2>Education</h2>
              <div className="cards-container">

                {/* UCF */}
                <FlipCard
                  front={<>
                  <img src={ucfLogo} alt="UCF logo" className="card-logo" />
                    <h3>University of Central Florida</h3>
                    <p>Honors B.S. Computer Science</p>
                    <p>GPA: 3.5</p>
                    <p>Aug 2022 – May 2026</p>
                  </>}
                  back={<>
                    <p><strong>Relevant Coursework</strong></p>
                    <p>Data Structures • Object-Oriented Design • Database Systems • Artificial Intelligence • Algorithms for Machine Learning • Discrete Structures • Operating Systems • System Software • Mobile Software Development</p>
                  </>}
                />

                {/* WHS */}
                <FlipCard
                  front={<>
                  <img src={whsLogo} alt="Wiesbaden High School logo" className="card-logo"/>
                    <h3>Wiesbaden High School</h3>
                    <p>Wiesbaden, Germany</p>
                  </>}
                  back={<p>German Red Cross Youth Club, Vice President of Student Government, Volleyball, Soccer, Women's Golf, Orchestra, Yearbook Designer, Student Ambassador, Musical Theatre, National Thespian Honor Society, National Honor Society</p>}
                />
              </div>
            </div>
          </section>

          {/* ===== EXPERIENCE ===== */}
          <section id="experience" className="content-section">
            <div className="info-card">
              <h2>Experience</h2>
              <div className="cards-container">
                {experiences.map((exp, i) => (
                  <div key={`${exp.title}-${exp.period}-${i}`} className="experience-card">
                    <img src={exp.logo} alt={exp.title} className="exp-logo"/>
                    <h3>{exp.title}</h3>
                    <p className="role">{exp.role}</p>
                    <p className="period">{exp.period}</p>
                    <p className="place">{exp.place}</p>
                  </div>
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
                  <FlipCard key={p.id}
                    front={<>
                      {p.emoji ? (
                        <div className="emoji-display">{p.emoji}</div>
                      ) : (
                        <img src={p.img} alt={p.title}
                             style={{width:'100%',borderRadius:8,marginBottom:8}} />
                      )}
                      <h3>{p.title}</h3>
                      <p className="tech-stack">{p.tech}</p>
                      <p className="project-date">{p.date}</p>
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
              <h2>Activities & Involvement</h2>
              <ul className="activities-list">
                {activities.map(a=> <li key={a}>{a}</li>)}
              </ul>
            </div>
          </section>

          {/* ----- CONTACT ----- */}
          <section id="contact" className="content-section">
            <div className="info-card">
              <h2>Contact Me!</h2>

              <p>📧&nbsp;
                <a href="mailto:amymariag217@gmail.com">
                  amymariag217@gmail.com
                </a>
              </p>

              <p>📱&nbsp;
                <a href="tel:+18635213869">
                  863-521-3869
                </a>
              </p>

              <p>💼&nbsp;
                <a href="https://linkedin.com/in/amymariegonzalez"
                   target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/amymariegonzalez
                </a>
              </p>

              <p>💻&nbsp;
                <a href="https://github.com/amymariag"
                   target="_blank" rel="noopener noreferrer">
                  github.com/amymariag
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

/* ---------- Flip-card helper component ---------- */
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
