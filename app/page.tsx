import EnquiryForm from "./enquiry-form";
import SiteHeader from "./site-header";
import { ADDRESS_LINE, CONTACT, MAPS_URL, NAV_LINKS, SOLUTIONS, whatsappLink } from "./site-data";

type Photo = {
  /** Path without extension; a `.jpg` fallback plus `-<w>.avif` variants must exist. */
  base: string;
  widths: [number, number];
  width: number;
  height: number;
};

const PHOTOS = {
  hero: { base: "/automated-welding", widths: [900, 1600], width: 1600, height: 1200 },
  machineTending: { base: "/machine-tending-cell", widths: [700, 1200], width: 900, height: 1200 },
  laserWelding: { base: "/robotic-welding-cell", widths: [700, 1200], width: 1200, height: 900 },
  handling: { base: "/robot-handling-cell", widths: [700, 1200], width: 1200, height: 900 },
  production: { base: "/production-welding-cell", widths: [800, 1400], width: 1050, height: 1400 },
  portrait: { base: "/jaydeep-champaneri", widths: [600, 940], width: 705, height: 940 },
} satisfies Record<string, Photo>;

const PROJECTS = [
  { photo: PHOTOS.laserWelding, title: "Robotic laser welding", tag: "LASER WELDING", className: "project-wide" },
  { photo: PHOTOS.machineTending, title: "CNC machine tending", tag: "MACHINE TENDING", className: "project-tall" },
  { photo: PHOTOS.handling, title: "Material handling cell", tag: "HANDLING", className: "" },
  { photo: PHOTOS.production, title: "Production welding cell", tag: "MIG / TIG WELDING", className: "" },
];

const PROCESS_STEPS = [
  { number: "01", title: "Engineer", text: "Process study, concept, simulation and cell design." },
  { number: "02", title: "Integrate", text: "Build, programming, testing and on-site commissioning." },
  { number: "03", title: "Support", text: "Training, breakdown support, maintenance and upgrades." },
];

const PARTNERS = ["YASKAWA", "FANUC", "KAWASAKI", "MIGATRONIC", "ABICOR BINZEL", "SKS", "LINCOLN", "GYS"];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const asset = (path: string) => `${basePath}${path}`;

  /** AVIF with a JPEG fallback, so nothing downloads a multi-megabyte original. */
  const Picture = ({
    photo,
    alt,
    sizes,
    eager = false,
    ...rest
  }: {
    photo: Photo;
    alt: string;
    sizes: string;
    eager?: boolean;
  } & React.ImgHTMLAttributes<HTMLImageElement>) => (
    <picture>
      <source
        type="image/avif"
        sizes={sizes}
        srcSet={photo.widths.map((w) => `${asset(`${photo.base}-${w}.avif`)} ${w}w`).join(", ")}
      />
      <img
        src={asset(`${photo.base}.jpg`)}
        alt={alt}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
        fetchPriority={eager ? "high" : undefined}
        {...rest}
      />
    </picture>
  );

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <SiteHeader
        logoDark={asset("/kiaan-robotics-logo.png")}
        logoLight={asset("/kiaan-robotics-logo-light.png")}
      />

      <main id="main">
        <section className="hero" id="top">
          <div id="header-sentinel" aria-hidden="true" style={{ position: "absolute", inset: "0 0 auto", height: 120, pointerEvents: "none" }} />
          <Picture
            photo={PHOTOS.hero}
            alt="Yaskawa industrial robot welding a steel assembly in a Kiaan Robotics cell"
            sizes="100vw"
            eager
          />
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
              <a className="button button-primary" href="#contact">Discuss a project <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#projects">See our work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-stats" aria-label="Company highlights">
            <div><strong>70<sup>+</sup></strong><span>Projects delivered</span></div>
            <div><strong>15<sup>+</sup></strong><span>Years experience</span></div>
            <div><strong>24<sup>/7</sup></strong><span>Service support</span></div>
          </div>
        </section>

        <section className="intro" id="company">
          <p className="section-kicker">What we do</p>
          <div className="intro-copy">
            <h2>Automation that works<br /><span>on your floor.</span></h2>
            <p>We design, build and support robotic systems for demanding manufacturing environments. Every cell starts with your part, process and production target—not a standard template.</p>
            <a className="inline-arrow" href="#solutions">See our capabilities <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="solutions" id="solutions">
          <div className="section-heading">
            <p className="section-kicker light">Core solutions</p>
            <h2>From process<br />to production.</h2>
          </div>
          <div className="solution-list">
            {SOLUTIONS.map((solution) => (
              <a key={solution.number} href="#contact" data-application={solution.title}>
                <span className="solution-number" aria-hidden="true">{solution.number}</span>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <span className="solution-cta">Discuss this <span aria-hidden="true">↗</span></span>
              </a>
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
            {PROJECTS.map((project) => (
              <article className={`project ${project.className}`} key={project.title}>
                <Picture
                  photo={project.photo}
                  alt={project.title}
                  sizes={project.className === "project-wide" ? "(max-width: 900px) 100vw, 90vw" : "(max-width: 900px) 100vw, 45vw"}
                />
                <div className="project-overlay">
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process">
          <div className="process-image">
            <Picture
              photo={PHOTOS.hero}
              alt="Kiaan Robotics welding cell running in production"
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <span>Production-ready systems</span>
          </div>
          <div className="process-copy">
            <p className="section-kicker light">One accountable team</p>
            <h2>Concept.<br />Commission.<br /><em>Keep running.</em></h2>
            <ol>
              {PROCESS_STEPS.map((step) => (
                <li key={step.number}>
                  <span aria-hidden="true">{step.number}</span>
                  <div><b>{step.title}</b><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="leadership" id="leadership">
          <div className="leadership-portrait">
            <Picture
              photo={PHOTOS.portrait}
              alt="Jaydip Champaneri, Managing Director of Kiaan Robotics"
              sizes="(max-width: 900px) 100vw, 470px"
            />
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
          <p>Technology experience across leading robot and welding brands</p>
          <div>{PARTNERS.map((partner) => <b key={partner}>{partner}</b>)}</div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-intro">
            <p className="section-kicker">Have a process to automate?</p>
            <h2>Let’s build what<br />your line needs.</h2>
            <p>Tell us about the part, process or production challenge. Our team will help define the right automation approach—usually with an answer the same working day.</p>
            <div className="contact-details">
              <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">{ADDRESS_LINE}</a>
            </div>
          </div>
          <EnquiryForm />
        </section>
      </main>

      <div className="whatsapp-widget">
        <div className="whatsapp-prompt">
          <small>Kiaan Robotics</small>
          <b>Connect with us via WhatsApp</b>
          <span>{CONTACT.phoneDisplay} · Typically replies quickly</span>
        </div>
        <a
          className="whatsapp-button"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Kiaan Robotics via WhatsApp"
        >
          <img src={asset("/whatsapp.svg")} alt="" aria-hidden="true" width={29} height={29} />
        </a>
      </div>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a className="brand footer-brand" href="#top" aria-label="Kiaan Robotics — back to top">
              <img src={asset("/kiaan-robotics-logo.png")} alt="Kiaan Robotics — automation solutions" width={600} height={109} />
            </a>
            <p>Turnkey robotic welding, machine tending, handling, painting and cutting cells—engineered, commissioned and supported from Ahmedabad, Gujarat.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li><a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phoneDisplay}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer">{ADDRESS_LINE}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kiaan Robotics. All rights reserved.</p>
          <p>Robotic automation &amp; special purpose machines · Ahmedabad, India</p>
        </div>
      </footer>
    </>
  );
}
