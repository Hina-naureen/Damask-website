"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import StaggerReveal from "./StaggerReveal";
import TiltCard from "./TiltCard";
import FabricContactNote from "./FabricContactNote";

type Lightbox = { type: "image" | "video"; src: string } | null;

export type MediaShowcaseDetails = {
  description: string;
  features: string[];
  applications: string[];
};

export default function MediaShowcase({
  id,
  eyebrow,
  title,
  description,
  cardLabel,
  photos,
  videos,
  details,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cardLabel: string;
  photos: string[];
  videos: string[];
  details: MediaShowcaseDetails;
}) {
  const [lightbox, setLightbox] = useState<Lightbox>(null);

  return (
    <section className="media-showcase-section" id={id}>
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="section-desc">{description}</p>
        </Reveal>

        <StaggerReveal className="product-grid media-showcase-grid" stagger={0.06}>
          {photos.map((src, i) => (
            <TiltCard
              className="product-card"
              key={src}
              onClick={() => setLightbox({ type: "image", src })}
            >
              <div className="product-media">
                <div className="product-frame" />
                <Image
                  src={src}
                  alt={`${cardLabel} — photo ${i + 1}`}
                  fill
                  sizes="(max-width: 700px) 50vw, (max-width: 1080px) 33vw, 25vw"
                />
                <div className="product-overlay">
                  <strong>{cardLabel}</strong>
                  <span>
                    <i className="fa-solid fa-circle-info" /> View Details
                  </span>
                </div>
                <div className="product-shine" />
              </div>
            </TiltCard>
          ))}

          {videos.map((src) => (
            <TiltCard
              className="product-card video-card"
              key={src}
              onClick={() => setLightbox({ type: "video", src })}
            >
              <div className="product-media">
                <div className="product-frame" />
                <video src={src} muted playsInline preload="metadata" />
                <div className="video-play-icon">
                  <i className="fa-solid fa-play" />
                </div>
                <div className="product-overlay">
                  <strong>{cardLabel}</strong>
                  <span>
                    <i className="fa-solid fa-circle-play" /> Watch Video
                  </span>
                </div>
                <div className="product-shine" />
              </div>
            </TiltCard>
          ))}
        </StaggerReveal>
      </div>

      {lightbox && (
        <div className="fabric-modal open" onClick={() => setLightbox(null)}>
          <button className="fabric-modal-close" aria-label="Close" onClick={() => setLightbox(null)}>
            <i className="fa-solid fa-xmark" />
          </button>

          <div className="fabric-modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="fabric-modal-image">
              {lightbox.type === "image" ? (
                <Image
                  src={lightbox.src}
                  alt={`${cardLabel} preview`}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
              ) : (
                <video src={lightbox.src} controls autoPlay playsInline />
              )}
            </div>
            <div className="fabric-modal-info">
              <p className="eyebrow">{eyebrow}</p>
              <h3>{cardLabel}</h3>
              <p className="fabric-modal-desc">{details.description}</p>

              <p className="fabric-modal-section-title">Main Features &amp; Usage</p>
              <ul className="fabric-modal-list">
                {details.features.map((f) => (
                  <li key={f}>
                    <i className="fa-solid fa-check" /> {f}
                  </li>
                ))}
              </ul>

              <p className="fabric-modal-section-title">Suitable Applications</p>
              <ul className="fabric-modal-list">
                {details.applications.map((a) => (
                  <li key={a}>
                    <i className="fa-solid fa-check" /> {a}
                  </li>
                ))}
              </ul>

              <FabricContactNote />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
