import React,{ useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2,
  Github, GraduationCap, Mail, MapPin, Menu, Moon, Phone, Sun,
  Linkedin, X, BrainCircuit, Database, Globe2, Layers3, ExternalLink
} from "lucide-react";
import portrait from "./assets/lakshman-portrait-placeholder.jpg";

const roles = [
  "Software Developer",
  "MERN Stack Developer",
  "React Developer",
  "Problem Solver"
];

const skillGroups = [
  { title: "Programming", level: "FOUNDATION", skills: ["Java", "Python", "C", "C++", "JavaScript · learning"] },
  { title: "Frontend", level: "BUILDING", skills: ["HTML5", "CSS3", "React · learning"] },
  { title: "Backend & APIs", level: "BUILDING", skills: ["Flask", "REST APIs", "Node.js · learning", "Express.js · learning"] },
  { title: "Database & Tools", level: "FOUNDATION", skills: ["MySQL", "SQL", "Git", "GitHub", "Postman"] },
  { title: "AI & Computer Vision", level: "PROJECT EXPERIENCE", skills: ["Mask R-CNN", "OpenCV", "TensorFlow"] }
];

const projects = [
  {
    number: "01",
    type: "REACT · RESPONSIVE UI",
    title: "KFC Landing Page",
    description: "A responsive restaurant landing page built as a frontend practice project, focusing on page layout, reusable UI sections and responsive styling.",
    stack: ["React", "JavaScript", "CSS", "Vite"],
    note: "FRONTEND PROJECT",
    art: "kfc",
    github: "",
    live: ""
  },
  {
    number: "02",
    type: "REACT · TMDB API",
    title: "Movie Explorer",
    description: "A React application for discovering popular movies and searching titles using the TMDB API, with reusable movie cards and interactive favourites.",
    stack: ["React", "JavaScript", "TMDB API", "CSS"],
    note: "API INTEGRATION PROJECT",
    art: "movies",
    github: "",
    live: ""
  },
  {
    number: "03",
    type: "REACT · RECIPE API",
    title: "Recipe Finder",
    description: "A recipe discovery application that displays recipe details, ingredients and measurements in an interactive modal, built with React and API-driven data.",
    stack: ["React", "JavaScript", "REST API", "CSS"],
    note: "API INTEGRATION PROJECT",
    art: "recipe",
    github: "",
    live: ""
  }
];

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("lakshman-theme");
    return saved || "light";
  });
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("lakshman-theme", theme);
  }, [theme]);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal-on-scroll");

    // Show content immediately when the browser requests reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const delay = deleting ? 42 : (typed === current ? 1350 : 82);
    const timer = window.setTimeout(() => {
      if (!deleting && typed === current) {
        setDeleting(true);
      } else if (deleting && typed === "") {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setTyped(deleting ? current.slice(0, typed.length - 1) : current.slice(0, typed.length + 1));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [typed, deleting, roleIndex]);

  const navItems = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"]
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="topbar page-enter page-enter-header">
        <a className="brand" href="#home" aria-label="Lakshman home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Lakshman<span className="brand-dot">.dev</span></span>
        </a>

        <nav id="primary-navigation" className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            className="theme-switch"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title="Switch theme"
          >
            <span className={theme === "light" ? "active" : ""}><Sun size={16}/></span>
            <span className={theme === "dark" ? "active" : ""}><Moon size={16}/></span>
          </button>
          <a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">
            <ArrowUpRight size={15}/> Resume
          </a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation">
            {menuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <div className="hello-pill page-enter" style={{ "--enter-delay": "100ms" }}><span/> Hello, World! I'm</div>
            <h1 className="page-enter" style={{ "--enter-delay": "190ms" }}>Velaga Vera<br/>Venkata <span>Lakshman.</span></h1>
            <div className="role-heading page-enter" style={{ "--enter-delay": "280ms" }}>I'm a <strong>{typed}<i className="typing-cursor">|</i></strong></div>
            <p className="hero-summary page-enter" style={{ "--enter-delay": "370ms" }}>
              Computer Science graduate (2025), currently working as an
              <strong> Operational Executive at CarTrade Tech</strong>. I enjoy solving practical problems
              and building web applications while growing my software engineering skills.
            </p>

            <div className="tech-pills page-enter" style={{ "--enter-delay": "460ms" }} aria-label="Technology focus">
              <span><Code2/> JavaScript</span>
              <span><Layers3/> React</span>
              <span><Database/> SQL</span>
              <span><BrainCircuit/> Python</span>
            </div>

            <div className="hero-actions page-enter" style={{ "--enter-delay": "550ms" }}>
              <a className="primary-button" href="#projects">Explore projects <ArrowRight size={17}/></a>
              <a className="secondary-button" href="/resume.pdf" target="_blank" rel="noreferrer">Download resume <ArrowUpRight size={16}/></a>
            </div>

            <div className="social-links page-enter" style={{ "--enter-delay": "640ms" }}>
              <a href="https://github.com/lakshman-velaga" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
              <a href="https://www.linkedin.com/in/velaga-lakshman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
              <a href="mailto:lakshmanvelaga04@gmail.com" aria-label="Email"><Mail/></a>
            </div>
          </div>

          <div className="hero-visual page-enter-visual">
            <div className="portrait-halo"/>
            <div className="portrait-orbit orbit-a"/>
            <div className="portrait-orbit orbit-b"/>
            <div className="portrait-card">
              <img src={portrait} alt="Lakshman Velaga — professional portrait in a dark suit" />
            </div>
            <div className="floating-fact fact-education">
              <span className="fact-icon"><GraduationCap/></span>
              <span><strong>B.Tech (CSE)</strong><small>2021 – 2025</small></span>
            </div>
            <div className="floating-fact fact-work">
              <span className="fact-icon"><BriefcaseBusiness/></span>
              <span><strong>CarTrade Tech</strong><small>Operational Executive</small></span>
            </div>
            <div className="floating-code">&lt;/&gt;</div>
            <div className="portrait-caption"><span/> LEARN · BUILD · IMPROVE</div>
          </div>

          <a className="scroll-cue page-enter" style={{ "--enter-delay": "760ms" }} href="#about"><ArrowDown size={14}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="highlights section-container" aria-label="Profile highlights">
          <article className="highlight-card reveal-on-scroll">
            <span className="highlight-icon"><Code2/></span>
            <div><strong>Web Development</strong><p>Building responsive web interfaces.</p></div>
          </article>
          <article className="highlight-card reveal-on-scroll">
            <span className="highlight-icon"><BrainCircuit/></span>
            <div><strong>AI & Deep Learning</strong><p>Academic work in image classification.</p></div>
          </article>
          <article className="highlight-card reveal-on-scroll">
            <span className="highlight-icon"><Layers3/></span>
            <div><strong>Problem Solving</strong><p>Java, programming and debugging foundations.</p></div>
          </article>
          <article className="highlight-card reveal-on-scroll">
            <span className="highlight-icon"><Globe2/></span>
            <div><strong>Continuous Learning</strong><p>Growing toward full-stack development.</p></div>
          </article>
        </section>

        <section className="content-section section-container" id="about">
          <div className="section-label reveal-on-scroll"><span>01</span> ABOUT ME</div>
          <div className="about-layout reveal-on-scroll">
            <div className="section-heading">
              <h2>Know more<br/><em>about me.</em></h2>
              <p>Computer Science graduate with a practical foundation in programming, web technologies and problem-solving.</p>
            </div>
            <div className="about-copy">
              <p>I completed my B.Tech in Computer Science and Engineering at Aditya College of Engineering and Technology in 2025. My academic work includes a deep-learning project for land–water classification from satellite images.</p>
              <p>I currently work at CarTrade Tech Limited in an operational role, supporting platform workflows and resolving operational tickets. Alongside my work, I'm strengthening JavaScript and React before progressing further into the MERN stack.</p>
              <div className="contact-inline">
                <span><MapPin/> Kakinada, Andhra Pradesh</span>
                <a href="mailto:lakshmanvelaga04@gmail.com"><Mail/> lakshmanvelaga04@gmail.com</a>
                <a href="tel:+919966470636"><Phone/> +91 99664 70636</a>
              </div>
            </div>
          </div>

          <div className="skills-heading reveal-on-scroll">
            <div><h3>Technical skills</h3><p>Current foundations and technologies in progress — not all are claimed as advanced proficiency.</p></div>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, skillIndex) => (
              <article className="skill-card reveal-on-scroll" key={group.title} style={{ "--reveal-delay": `${skillIndex * 85}ms` }}>
                <div className="skill-card-top"><h4>{group.title}</h4><span>{group.level}</span></div>
                <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>

          <div className="education-card reveal-on-scroll">
            <span className="education-icon"><GraduationCap/></span>
            <div><small>EDUCATION · 2021–2025</small><strong>B.Tech — Computer Science & Engineering</strong><span>Aditya College of Engineering and Technology, Surampalem</span></div>
          </div>
        </section>

        <section className="content-section section-container" id="experience">
          <div className="section-label reveal-on-scroll"><span>02</span> EXPERIENCE</div>
          <div className="section-heading experience-intro reveal-on-scroll">
            <h2>Experience that<br/><em>builds perspective.</em></h2>
            <p>Professional and internship experience across operations, issue resolution and programming.</p>
          </div>

          <article className="timeline-card reveal-on-scroll">
            <div className="timeline-date">SEP 2025 — PRESENT</div>
            <div className="timeline-content">
              <div className="timeline-title-row"><div><h3>Operational Executive</h3><p>CarTrade Tech Limited · Kakinada</p></div><span className="status-pill">CURRENT ROLE</span></div>
              <p>Support day-to-day platform operations for automotive clients, handle operational tickets and assist with login and workflow issues. Work with internal processes and support documentation while developing technical skills in web development.</p>
              <div className="tag-row"><span>Platform operations</span><span>Ticket resolution</span><span>Issue investigation</span><span>Client support</span></div>
            </div>
          </article>

          <article className="timeline-card reveal-on-scroll">
            <div className="timeline-date">MAY 2023 — JUL 2023</div>
            <div className="timeline-content">
              <div className="timeline-title-row"><div><h3>Problem-Solving & Java Intern</h3><p>Technical Hub Pvt. Ltd. · Surampalem</p></div><span className="status-pill muted">INTERNSHIP</span></div>
              <p>Worked on Java programming and problem-solving tasks, collaborated with senior developers and gained practical exposure to application development.</p>
              <div className="tag-row"><span>Java</span><span>Problem solving</span><span>Programming</span></div>
            </div>
          </article>
        </section>

        <section className="content-section section-container" id="projects">
          <div className="section-label reveal-on-scroll"><span>03</span> SELECTED PROJECTS</div>
          <div className="section-heading projects-intro reveal-on-scroll">
            <h2>Built through<br/><em>curiosity & practice.</em></h2>
            <p>Projects that demonstrate applied learning. Repository and live-demo links will be connected after we review and deploy the source projects.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, projectIndex) => (
              <article className="project-card reveal-on-scroll" key={project.number} style={{ "--reveal-delay": `${projectIndex * 110}ms` }}>
                <div className={`project-visual ${project.art}`}>
                  <span className="project-number">{project.number} / PROJECT</span>
                  <div className="project-symbol">{project.art === "kfc" ? "KFC" : project.art === "movies" ? "▶" : "✳"}</div>
                  <span className="project-category">{project.type}</span>
                </div>
                <div className="project-content">
                  <span className="project-note">{project.note}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-footer">
                    {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={14}/></a> : <span>GitHub repository coming soon</span>}
                    {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14}/></a> : <span>Live demo coming soon</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="project-footnote">Project source repositories and live demos will be added after we review and deploy each project.</p>
        </section>

        <section className="content-section section-container contact-section" id="contact">
          <div className="section-label reveal-on-scroll"><span>04</span> CONTACT</div>
          <div className="contact-panel reveal-on-scroll">
            <div className="contact-intro">
              <p className="eyebrow">LET'S CONNECT</p>
              <h2>Have a role or<br/><em>project in mind?</em></h2>
              <p>I'm interested in junior software development opportunities, collaborative projects and learning from engineering teams.</p>
            </div>
            <div className="contact-methods">
              <a href="mailto:lakshmanvelaga04@gmail.com"><Mail/><span><small>EMAIL</small>lakshmanvelaga04@gmail.com</span><ArrowUpRight/></a>
              <a href="tel:+919966470636"><Phone/><span><small>PHONE</small>+91 99664 70636</span><ArrowUpRight/></a>
              <a href="https://www.linkedin.com/in/velaga-lakshman/" target="_blank" rel="noreferrer"><Linkedin/><span><small>LINKEDIN</small>velaga-lakshman</span><ArrowUpRight/></a>
              <a href="https://github.com/lakshman-velaga" target="_blank" rel="noreferrer"><Github/><span><small>GITHUB</small>lakshman-velaga</span><ArrowUpRight/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home"><span className="brand-mark">&lt;/&gt;</span><span>Lakshman<span className="brand-dot">.dev</span></span></a>
        <span>DESIGNED & BUILT BY LAKSHMAN · 2026</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
