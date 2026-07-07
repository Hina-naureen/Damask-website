"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/data/curtains";
import { uw } from "@/lib/unsplash";
import StaggerReveal from "./StaggerReveal";
import TiltCard from "./TiltCard";

type Category = { key: string; label: string };

export default function ProductGrid({
  products,
  categories,
}: {
  products: Product[];
  categories?: readonly Category[];
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [active, setActive] = useState("all");

  const visible = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {categories && (
        <div className="filters">
          {categories.map((c) => (
            <button
              key={c.key}
              className={`filter-btn ${active === c.key ? "active" : ""}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      <StaggerReveal className="product-grid" stagger={0.08} key={active}>
        {visible.map((p) => (
          <TiltCard
            className="product-card"
            key={p.slug}
            onClick={() => setLightbox(uw(p.imageId, 1600))}
          >
            <div className="product-media">
              <div className="product-frame" />
              <Image
                src={uw(p.imageId, 800)}
                alt={p.name}
                fill
                sizes="(max-width: 700px) 50vw, (max-width: 1080px) 33vw, 25vw"
              />
              <div className="product-overlay">
                <strong>{p.name}</strong>
                <span>
                  <i className="fa-solid fa-magnifying-glass-plus" /> View Design
                </span>
              </div>
              <div className="product-shine" />
            </div>
            <div className="product-body">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
          </TiltCard>
        ))}
      </StaggerReveal>

      {lightbox && (
        <div className="lightbox open" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>
            <i className="fa-solid fa-xmark" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="Product preview" />
        </div>
      )}
    </>
  );
}
