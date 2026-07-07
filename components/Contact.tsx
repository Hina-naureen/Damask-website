"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { site } from "@/lib/data/site";
import Reveal from "./Reveal";

export default function Contact() {
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setNote("Sending your request...");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setNote("Thank you! Your consultation request has been sent. We will contact you shortly.");
        form.reset();
      } else {
        setNote("Something went wrong. Please call us directly at " + site.phonePrimary + ".");
      }
    } catch {
      setNote("Something went wrong. Please call us directly at " + site.phonePrimary + ".");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <Reveal className="contact-info">
          <p className="eyebrow">Get In Touch</p>
          <h2>Let&rsquo;s Design Your Dream Space</h2>
          <p className="section-desc">
            Reach out for a personalized consultation. Our team responds within 24 hours.
          </p>

          <ul className="contact-list">
            <li>
              <i className="fa-solid fa-location-dot" />
              <div>
                <strong>Address</strong>
                <span>{site.address}</span>
              </div>
            </li>
            <li>
              <i className="fa-solid fa-phone" />
              <div>
                <strong>Phone</strong>
                <span>
                  <a href={`tel:${site.phonePrimaryTel}`}>{site.phonePrimary}</a> &nbsp;|&nbsp;{" "}
                  <a href={`tel:${site.phoneSecondaryTel}`}>{site.phoneSecondary}</a>
                </span>
              </div>
            </li>
            <li>
              <i className="fa-solid fa-envelope" />
              <div>
                <strong>Email</strong>
                <span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </div>
            </li>
            <li>
              <i className="fa-brands fa-whatsapp" />
              <div>
                <strong>WhatsApp</strong>
                <span>
                  <a href={site.whatsapp} target="_blank" rel="noopener">
                    Chat With Us Instantly
                  </a>
                </span>
              </div>
            </li>
          </ul>

          <div className="qr-card">
            <Image src="/damask-qr.jpg" alt="Scan to connect with Damask Textile Pakistan" width={110} height={110} />
            <div>
              <strong>Scan To Connect</strong>
              <span>Save our contact instantly from the card QR code.</span>
            </div>
          </div>

          <div className="map-embed">
            <iframe
              title="Damask Textile Pakistan Location Map"
              src="https://maps.google.com/maps?q=E-189%20PECHS%20Block%202%20Karachi%20Pakistan&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.1}>
          <form
            className="contact-form"
            action="https://formsubmit.co/damasktextilepak@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New Consultation Request – Damask Textile Pakistan" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <h3>Book A Free Consultation</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="Full Name" required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="Phone" required placeholder="03xx-xxxxxxx" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="Email" required placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" name="Service" defaultValue="Luxury Residential Interiors">
                  <option>Luxury Residential Interiors</option>
                  <option>Furniture &amp; Sofa Design</option>
                  <option>Curtain &amp; Textile Solutions</option>
                  <option>Wall &amp; Ceiling Design</option>
                  <option>Lighting Design</option>
                  <option>Commercial Interiors</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Project</label>
              <textarea
                id="message"
                name="Message"
                rows={4}
                placeholder="Describe your space and requirements..."
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
              {sending ? "Sending..." : "Send Consultation Request"}
            </button>
            <p className="form-note">{note}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
