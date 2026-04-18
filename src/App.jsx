import React from 'react';
import './App.css'; // You can style this later!

function App() {
  return (
    <div className="portfolio-container">
      {/* HEADER SECTION */}
      <header className="header">
        <h1>Anthony "TonyStark" Okonkwo</h1>
        <h2>Full-Stack Developer | 3D Game Artist | Mechanical Engineer</h2>
      </header>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <h3>About Me</h3>
        <p>
          I'm Anthony Okonkwo, and I'm passionate about being a full-stack programmer, game designer, and Mechanical Engineer. 
        </p>
        <p>
          For me, it all comes down to a love for building things from scratch and solving problems. I enjoy the pure logic of writing backend code for web applications, the creative freedom of designing 3D game environments, and the hands-on reality of understanding how physical machines work. 
        </p>
        <p>
          I strongly believe this mix of skills is exactly what is needed to change the energy sector. By combining my mechanical engineering foundation with modern software development, I want to build smart, data-driven applications that monitor physical systems, automate heavy industrial processes, and make energy operations much more efficient.
        </p>
        <p>
          Currently, I am putting this into practice as a SIWES Intern at Chevron Nigeria Limited and a Full-Stack Developer at Cyberpurview, all while completing my Mechanical Engineering degree at UNIZIK.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section">
        <h3>What I'm Building</h3>
        
        <div className="project-card">
          <h4>Cyberpurview Platforms (SchoolOne & JobConcierge)</h4>
          <p><strong>Stack:</strong> Next.js, NestJS, TypeScript, Supabase</p>
          <p>Developing enterprise web applications with complex database authentication, API integrations, and 13-page dynamic RBAC dashboards.</p>
        </div>

        <div className="project-card">
          <h4>Lagos-Themed Multiplayer Racing Game</h4>
          <p><strong>Stack:</strong> Unity, Blender, C#</p>
          <p>A low-poly racing game featuring local Nigerian vehicles like the Keke Napep and Danfo. PC version includes split-screen multiplayer, while Android supports Wi-Fi multiplayer.</p>
        </div>

        <div className="project-card">
          <h4>Engineering & Utilities</h4>
          <p><strong>Tools:</strong> SolidWorks, Python, React</p>
          <p>Built a semester/year CGPA Calculator for students. Also highly experienced in CAD modeling, 16-link mechanism synthesis, and fluid flow simulations.</p>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="footer">
        <h3>Let's Connect</h3>
        <p>I’m always open to collaborating on impactful projects, especially in tech-for-Africa, energy, or gaming.</p>
        <p>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a> | 
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"> GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;