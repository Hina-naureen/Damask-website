"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { uw } from "@/lib/unsplash";

gsap.registerPlugin(ScrollTrigger);

type PageHeroProps = {
  imageId: string;
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
};

export default function PageHero({ imageId, eyebrow, title, description, crumb }: PageHeroProps) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mediaRef.current) {
        gsap.to(mediaRef.current, {
          yPercent: 14,
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
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.2 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="page-hero">
      <div className="hero-media" ref={mediaRef} style={{ inset: "-8% 0 0 0" }}>
        <Image src={uw(imageId, 1920)} alt={title} fill priority sizes="100vw" />
        <div className="hero-overlay" />
      </div>
      <div className="container page-hero-content" ref={contentRef}>
        <div className="breadcrumb reveal-item">
          <Link href="/">Home</Link> <span>/</span> <span>{crumb}</span>
        </div>
        <p className="eyebrow reveal-item">{eyebrow}</p>
        <h1 className="reveal-item">{title}</h1>
        <p className="reveal-item">{description}</p>
      </div>
    </section>
  );
}
