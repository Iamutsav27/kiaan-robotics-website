"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT, SOLUTIONS } from "./site-data";

const NOT_SURE = "Not sure yet";

/**
 * The site is a static export with no backend, so the form does not POST.
 * It composes the enquiry into a single message and hands it to WhatsApp
 * (the channel this business actually runs on) or to the visitor's mail
 * client as a fallback.
 */
export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [application, setApplication] = useState(NOT_SURE);
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);

  // Clicking a solution row pre-fills the application field.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest?.("[data-application]");
      if (trigger) setApplication(trigger.getAttribute("data-application") || NOT_SURE);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const compose = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const lines = [
      `Name: ${value("name")}`,
      value("company") && `Company: ${value("company")}`,
      `Phone: ${value("phone")}`,
      value("email") && `Email: ${value("email")}`,
      `Application: ${value("application")}`,
      value("message") && `Details: ${value("message")}`,
    ].filter(Boolean);
    return `New automation enquiry — Kiaan Robotics\n\n${lines.join("\n")}`;
  };

  const handleWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = compose(event.currentTarget);
    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSentVia("whatsapp");
  };

  const handleEmail = () => {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;
    const body = compose(form);
    const subject = `Automation enquiry — ${application}`;
    window.location.href =
      `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentVia("email");
  };

  return (
    <form className="enquiry" ref={formRef} onSubmit={handleWhatsApp}>
      <h3>Send an enquiry</h3>
      <p>Share the part, process or production challenge and our team will suggest the right approach.</p>

      <div className="field-row">
        <div className="field">
          <label htmlFor="ef-name">Name <em aria-hidden="true">*</em></label>
          <input id="ef-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="ef-company">Company</label>
          <input id="ef-company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="ef-phone">Phone <em aria-hidden="true">*</em></label>
          <input id="ef-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
        </div>
        <div className="field">
          <label htmlFor="ef-email">Email</label>
          <input id="ef-email" name="email" type="email" autoComplete="email" inputMode="email" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="ef-application">Application</label>
        <select
          id="ef-application"
          name="application"
          value={application}
          onChange={(event) => setApplication(event.target.value)}
        >
          <option>{NOT_SURE}</option>
          {SOLUTIONS.map((solution) => (
            <option key={solution.number}>{solution.title}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="ef-message">Part, process or volumes</label>
        <textarea id="ef-message" name="message" rows={4} />
      </div>

      <div className="enquiry-actions">
        <button className="button button-dark" type="submit">
          Send on WhatsApp <span aria-hidden="true">↗</span>
        </button>
        <button className="button-ghost" type="button" onClick={handleEmail}>
          Send by email instead <span aria-hidden="true">↗</span>
        </button>
      </div>

      <p className={`enquiry-note${sentVia ? " is-sent" : ""}`} role="status">
        {sentVia === "whatsapp"
          ? "WhatsApp should now be open with your enquiry ready to send."
          : sentVia === "email"
            ? "Your mail app should now be open with your enquiry ready to send."
            : "Your details are only used to reply to this enquiry."}
      </p>
    </form>
  );
}
