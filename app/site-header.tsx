"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT, NAV_LINKS, whatsappLink } from "./site-data";

export default function SiteHeader({ logoDark, logoLight }: { logoDark: string; logoLight: string }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // One observer drives two things: the header turns solid once the page has
  // scrolled past the sentinel, and the hero's spark/smoke animations are
  // paused whenever the hero itself is off-screen.
  useEffect(() => {
    const sentinel = document.getElementById("header-sentinel");
    const hero = document.getElementById("top");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === sentinel) setSolid(!entry.isIntersecting);
          if (entry.target === hero) {
            document.documentElement.classList.toggle("hero-offscreen", !entry.isIntersecting);
          }
        }
      },
      { threshold: 0 },
    );
    if (sentinel) observer.observe(sentinel);
    if (hero) observer.observe(hero);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("hero-offscreen");
    };
  }, []);

  // Lock background scrolling and support Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${solid ? " is-solid" : ""}`}>
        <a className="brand" href="#top" aria-label="Kiaan Robotics — back to top">
          <img className="logo-dark" src={logoDark} alt="Kiaan Robotics — automation solutions" width={600} height={109} />
          <img className="logo-light" src={logoLight} alt="" aria-hidden="true" width={600} height={109} />
        </a>

        <nav aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">Discuss a project <span aria-hidden="true">↗</span></a>

        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-drawer"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
          <i aria-hidden="true" />
        </button>
      </header>

      <div
        id="nav-drawer"
        className={`nav-drawer${open ? " is-open" : ""}`}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        {NAV_LINKS.map((link, index) => (
          <a className="drawer-link" key={link.href} href={link.href}>
            {link.label}
            <small aria-hidden="true">{String(index + 1).padStart(2, "0")}</small>
          </a>
        ))}
        <div className="drawer-contact">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp us <span aria-hidden="true">↗</span>
          </a>
          <a href={`tel:${CONTACT.phoneHref}`}>
            {CONTACT.phoneDisplay} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </>
  );
}
