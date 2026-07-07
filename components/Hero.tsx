"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SparkleField from "./SparkleField";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mediaRef.current) {
        gsap.to(mediaRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: mediaRef.current.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll(".reveal-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 34 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.14, delay: 0.3 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-media" ref={mediaRef} style={{ inset: "-4% 0 0 0" }}>
        <Image
          src="/hero-room.jpg"
          alt="Luxury bedroom with orange velvet curtains, orange armchair and gold chandelier"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
      </div>
      <SparkleField />
      <div className="container hero-content" ref={contentRef}>
        <p className="eyebrow reveal-item">Premium Interior Design Studio — Karachi, Pakistan</p>
        <h1 className="reveal-item">
          Transform Your Space Into A <span>Luxury Experience</span>
        </h1>
        <p className="hero-sub reveal-item">
          Premium Interior Design Solutions For Homes, Offices &amp; Luxury Spaces
        </p>
        <div className="hero-actions reveal-item">
          <Magnetic>
            <Link href="/#contact" className="btn btn-primary">
              Book Consultation
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/#portfolio" className="btn btn-outline">
              Explore Our Designs
            </Link>
          </Magnetic>
        </div>
      </div>
      <a href="#stats" className="scroll-indicator" aria-label="Scroll down">
        <i className="fa-solid fa-chevron-down" />
      </a>
    </section>
  );
}
