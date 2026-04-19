import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Terminal, ArrowRight } from 'lucide-react'; 
import './App.css';

function App() {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [portfolioRevealed, setPortfolioRevealed] = useState(false);

  return (
    <div className={`portfolio-container ${portfolioRevealed ? 'scroll-enabled' : 'scroll-disabled'}`}>
      
      {/* 🚀 THE ENTRY OVERLAY (Slides Up & Away) */}
      <div className={`entry-overlay ${portfolioRevealed ? 'slide-up' : ''}`}>
        
        {/* ✨ THE ACTUAL FLOATING CARD */}
        <div className="portfolio-hero-card">
          <div className="entry-nav">
            <span className="brand-logo">TonyStark.</span>
            <div className="nav-links">
              <span>Home</span>
              <span>About</span>
              <span>Projects</span>
              <span>Contact</span>
            </div>
          </div>

          <div className="entry-content">
            <div className="entry-text-side">
              <h1 className="main-heading">
                Hi, I'm Anthony Okonkwo
              </h1>
              <h2 className="main-role text-sky-blue">
                Software Engineer & 3D Artist
              </h2>
              <p className="entry-description">
                Merging mechanical engineering precision with modern software stacks. Building enterprise web platforms, rendering low-poly Nigerian environments, and synthesizing complex systems from scratch.
              </p>
              <div className="entry-actions">
                <button 
                  className="btn-primary" 
                  onClick={() => setPortfolioRevealed(true)}
                >
                  Access Portfolio <ArrowRight className="btn-icon" size={18} />
                </button>
                <button 
                  className="btn-secondary" 
                  onClick={() => setPortfolioRevealed(true)}
                >
                  Let's Talk
                </button>
              </div>
            </div>

            <div className="entry-image-side">
              <div className="image-wrapper">
                <img 
                  src="/anthony-portrait.jpg" 
                  alt="Anthony Okonkwo" 
                  className="portrait-image"
                />
                {/* Subtle digital overlay effect */}
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🧠 THE REST OF THE PORTFOLIO (Hidden underneath until overlay slides up) */}
      <div className="main-content">
        <section className="about-section max-width-wrapper">
          <div 
            className={`about-card ${isAboutExpanded ? 'expanded' : ''}`}
            onClick={() => setIsAboutExpanded(!isAboutExpanded)}
          >
            <div className="about-card-header">
              <div className="terminal-header">
                <Terminal className="terminal-icon" size={24} />
                <h3>System.out.println("About_Me");</h3>
              </div>
              <button className="expand-btn">
                {isAboutExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
            </div>

            <div className="about-card-content">
              <div className="about-grid">
                <div className="about-text">
                  <p>
                    I build things from the ground up. Whether it's writing robust backend architecture, designing immersive 3D multiplayer environments, or understanding the physical reality of heavy machinery, my focus is on solving complex problems.
                  </p>
                  <p>
                    My ultimate objective is to revolutionize the energy sector. By merging my mechanical engineering foundation with modern software stacks, I aim to deploy smart, data-driven applications that automate industrial processes and optimize energy operations.
                  </p>
                  <p>
                    Currently executing this vision as a SIWES Intern at <strong className="highlight-blue">Chevron Nigeria Limited</strong> and a Full-Stack Developer at <strong className="highlight-blue">Cyberpurview</strong>, parallel to my engineering studies at Nnamdi Azikiwe University.
                  </p>
                </div>
                <div className="tech-stack">
                  <div className="stack-box sky-blue-border">
                    <h4>Software & Web</h4>
                    <p>Next.js, NestJS, TypeScript, Supabase, Node.js, React</p>
                  </div>
                  <div className="stack-box red-border">
                    <h4>Engineering & CAD</h4>
                    <p>SolidWorks, Python, PMKS+, Fluid Flow</p>
                  </div>
                  <div className="stack-box black-border">
                    <h4>Game & 3D Dev</h4>
                    <p>Unity, Blender, C#, Low-Poly Modeling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🛠️ PROJECTS SECTION */}
        <section className="projects-section max-width-wrapper">
          <div className="section-header">
            <h3>Active Directives</h3>
            <div className="divider"></div>
          </div>
          
          <div className="project-grid">
            <div className="project-card">
              <div className="card-top">
                <span className="project-category">Enterprise Web</span>
                <h4>Cyberpurview Platforms</h4>
              </div>
              <p className="project-desc">
                Developing 'SchoolOne' and 'JobConcierge'. Handling complex database authentication, API integrations, and architecting 13-page dynamic RBAC dashboards.
              </p>
              <div className="project-tags">
                <span>Next.js</span><span>NestJS</span><span>Supabase</span>
              </div>
            </div>

            <div className="project-card">
              <div className="card-top">
                <span className="project-category">Game Dev</span>
                <h4>Lagos-Themed Racing Game</h4>
              </div>
              <p className="project-desc">
                A highly optimized low-poly racing experience featuring iconic Nigerian vehicles. Built with split-screen PC multiplayer and Wi-Fi Android support.
              </p>
              <div className="project-tags">
                <span>Unity</span><span>Blender</span><span>C#</span>
              </div>
            </div>

            <div className="project-card">
              <div className="card-top">
                <span className="project-category">Engineering Tool</span>
                <h4>Advanced CGPA Engine</h4>
              </div>
              <p className="project-desc">
                Upgraded a standard GPA calculator into a comprehensive CGPA engine supporting specific semester/year selections and cumulative computation.
              </p>
              <div className="project-tags">
                <span>Python</span><span>React</span><span>Logic</span>
              </div>
            </div>
          </div>
        </section>

        {/* 📡 FOOTER / CONTACT */}
        <footer id="contact" className="footer-section">
          <div className="footer-content max-width-wrapper">
            <h2>Let's Build the Future</h2>
            <p>Always open to collaborating on tech-for-Africa, energy automation, or game development.</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/anthony-okonkwo-326717265" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
              <a href="https://github.com/Anthony-okonkwo" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
              <a href="https://wa.me/2348159088338" target="_blank" rel="noreferrer" className="social-btn whatsapp-btn">WhatsApp</a>
            </div>
            <p className="copyright">© {new Date().getFullYear()} Anthony Okonkwo. Engineered for precision.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;