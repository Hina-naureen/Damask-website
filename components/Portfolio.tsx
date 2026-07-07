"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolio, portfolioCategories } from "@/lib/data/portfolio";
import { uw } from "@/lib/unsplash";
import Reveal from "./Reveal";
import StaggerReveal from "./StaggerReveal";

export default function Portfolio() {
  const [active, setActive] = useState<string>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Our Portfolio</p>
          <h2>Recent Design Transformations</h2>
          <p className="section-desc">
            A glimpse into the luxury spaces we&rsquo;ve designed and delivered across Karachi.
          </p>
        </Reveal>

        <div className="filters">
          {portfolioCategories.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${active === f.key ? "active" : ""}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <StaggerReveal className="portfolio-grid" stagger={0.06}>
          {portfolio.map((item) => (
            <figure
              className={`portfolio-item ${active !== "all" && active !== item.category ? "hidden" : ""}`}
              key={item.imageId}
              onClick={() => setLightbox(uw(item.imageId, 1600))}
            >
              <Image
                src={uw(item.imageId, 900)}
                alt={item.title}
                fill
                sizes="(max-width: 700px) 50vw, (max-width: 1080px) 33vw, 25vw"
              />
              <figcaption>
                <h4>{item.title}</h4>
                <span>{item.tag}</span>
              </figcaption>
            </figure>
          ))}
        </StaggerReveal>
      </div>

      {lightbox && (
        <div className="lightbox open" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>
            <i className="fa-solid fa-xmark" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="Portfolio preview" />
        </div>
      )}
    </section>
  );
}
