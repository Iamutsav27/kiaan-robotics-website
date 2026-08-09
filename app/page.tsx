const solutions = [
  {
    number: "01",
    title: "SPM — Special Purpose Machine",
    text: "Custom-built automation engineered around your production process, cycle time and floor requirements.",
  },
  {
    number: "02",
    title: "Machine tending & handling",
    text: "Reliable CNC, press and process-machine loading systems built around your actual cycle and floor layout.",
  },
  {
    number: "03",
    title: "Assembly & material dispensing",
    text: "Purpose-built assembly, gluing and material dispensing cells that keep production moving.",
  },
  {
    number: "04",
    title: "3D cutting & vision inspection",
    text: "Integrated 3D cutting and vision inspection applications for consistent quality and complex parts.",
  },
  {
    number: "05",
    title: "Spray painting & powder coating",
    text: "Automated spray painting and powder coating systems for repeatable, high-quality finishes.",
  },
];

const projects = [
  {
    image: "/automated-welding.jpeg",
    title: "Automated welding cell",
    tag: "MIG / TIG WELDING",
    className: "project-wide",
  },
  {
    image: "/machine-tending-cell.jpeg",
    title: "CNC machine tending",
    tag: "MACHINE TENDING",
    className: "project-tall",
  },
  {
    image: "/robotic-welding-cell.jpeg",
    title: "Precision component welding",
    tag: "ROBOTIC WELDING",
    className: "",
  },
  {
    image: "/robot-handling-cell.jpeg",
    title: "Material handling cell",
    tag: "HANDLING",
    className: "",
  },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const asset = (path: string) => `${basePath}${path}`;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kiaan Robotics home">
          <img src={asset("/kiaan-robotics-logo.png")} alt="Kiaan Robotics and automation solutions" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#solutions">Solutions</a>
          <a href="#projects">Projects</a>
          <a href="#company">Company</a>
        </nav>
        <a className="header-cta" href="#contact">Discuss a project <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <img src={asset("/automated-welding.jpeg")} alt="Yaskawa industrial robot welding a steel assembly" />
        <div className="hero-shade" />
        <div className="industrial-grid" aria-hidden="true" />
        <div className="weld-glow" aria-hidden="true"><span /></div>
        <div className="smoke-field" aria-hidden="true"><i /><i /><i /></div>
        <div className="spark-field" aria-hidden="true">
          {Array.from({ length: 20 }, (_, index) => <i key={index} />)}
        </div>
        <div className="hero-content">
          <p className="eyebrow"><span /> Industrial automation, built around you</p>
          <h1>We make<br />production <em>move.</em></h1>
          <p className="hero-copy">Turnkey robotic cells, integration and field support—from first concept to a production-ready system.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore our work <span>↓</span></a>
            <a className="text-link" href="tel:+918320019151">Talk to an engineer <span>↗</span></a>
          </div>
        </div>
        <div className="hero-stats" aria-label="Company highlights">
          <div><strong>70<sup>+</sup></strong><span>Projects delivered</span></div>
          <div><strong>24<sup>/7</sup></strong><span>Service support</span></div>
        </div>
      </section>

      <section className="intro" id="company">
        <p className="section-kicker">What we do</p>
        <div className="intro-copy">
          <h2>Automation that works<br /><span>on your floor.</span></h2>
          <p>We design, build and support robotic systems for demanding manufacturing environments. Every cell starts with your part, process and production target—not a standard template.</p>
          <a className="inline-arrow" href="#solutions">See our capabilities <span>↗</span></a>
        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="section-heading">
          <p className="section-kicker light">Core solutions</p>
          <h2>From process<br />to production.</h2>
        </div>
        <div className="solution-list">
          {solutions.map((solution) => (
            <article key={solution.number}>
              <span className="solution-number">{solution.number}</span>
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              <span className="solution-icon" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="projects">
        <div className="work-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2>Built for the<br /><span>real world.</span></h2>
          </div>
          <p>Real systems. Real production environments. Designed, integrated and supported by the Kiaan Robotics team.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project ${project.className}`} key={project.title}>
              <img src={asset(project.image)} alt={project.title} />
              <div className="project-overlay">
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="process-image">
          <img src={asset("/production-welding-cell.jpeg")} alt="Kiaan Robotics welding cell in production" />
          <span>Production-ready systems</span>
        </div>
        <div className="process-copy">
          <p className="section-kicker light">One accountable team</p>
          <h2>Concept.<br />Commission.<br /><em>Keep running.</em></h2>
          <ol>
            <li><span>01</span><div><b>Engineer</b><p>Process study, concept, simulation and cell design.</p></div></li>
            <li><span>02</span><div><b>Integrate</b><p>Build, programming, testing and on-site commissioning.</p></div></li>
            <li><span>03</span><div><b>Support</b><p>Training, breakdown support, maintenance and upgrades.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="leadership" id="leadership">
        <div className="leadership-portrait">
          <img src={asset("/jaydeep-champaneri.jpeg")} alt="Jaydip Champaneri, Managing Director of Kiaan Robotics" />
          <div className="leader-label">
            <span>Jaydip Champaneri</span>
            <small>Managing Director</small>
          </div>
        </div>
        <div className="leadership-copy">
          <p className="section-kicker">Leadership</p>
          <h2>Driven by vision.<br /><span>Committed to progress.</span></h2>
          <p>With 15+ years of experience, Jaydip Champaneri’s leadership brings practical automation engineering, responsive service and long-term accountability to every customer engagement.</p>
          <div className="leadership-values">
            <div><b>Practical</b><span>Solutions shaped by real production needs</span></div>
            <div><b>Accountable</b><span>One team from concept through support</span></div>
          </div>
        </div>
      </section>

      <section className="partners" aria-label="Technology partners">
        <p>Technology experience across & authorized partners</p>
        <div><b>YASKAWA</b><b>FANUC</b><b>KAWASAKI</b><b>MIGATRONIC</b><b>ABICOR BINZEL</b><b>SKS</b><b>LINCOLN</b><b>GYS</b></div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-kicker light">Have a process to automate?</p>
          <h2>Let’s build what<br />your line needs.</h2>
        </div>
        <div className="contact-card">
          <p>Tell us about the part, process or production challenge. Our team will help define the right automation approach.</p>
          <a className="button button-dark" href="mailto:kiaan.robotics@gmail.com">Start a conversation <span>↗</span></a>
          <div className="contact-details">
            <a href="tel:+918320019151">+91 83200 19151</a>
            <a href="mailto:kiaan.robotics@gmail.com">kiaan.robotics@gmail.com</a>
            <a style={{ maxWidth: "100%", lineHeight: 1.6 }} href="https://www.google.com/maps/search/?api=1&query=18%2C+Radhe+Krishna+Industrial+Hub%2C+Behind+Hinglaj+Mata+Mandir%2C+Kathwada%2C+Ahmedabad+382430" target="_blank" rel="noopener noreferrer">18, Radhe Krishna Industrial Hub, Behind Hinglaj Mata Mandir, Kathwada, Ahmedabad 382430</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img src={asset("/kiaan-robotics-logo.png")} alt="Kiaan Robotics and automation solutions" />
        </a>
        <p><a href="https://www.google.com/maps/search/?api=1&query=18%2C+Radhe+Krishna+Industrial+Hub%2C+Behind+Hinglaj+Mata+Mandir%2C+Kathwada%2C+Ahmedabad+382430" target="_blank" rel="noopener noreferrer">Kathwada, Ahmedabad 382430</a></p>
        <p>© 2026 Kiaan Robotics</p>
      </footer>
    </main>
  );
}
