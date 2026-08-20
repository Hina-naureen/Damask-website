"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/data/curtains";
import { uw } from "@/lib/unsplash";
import StaggerReveal from "./StaggerReveal";
import TiltCard from "./TiltCard";
import FabricContactNote from "./FabricContactNote";

type Category = { key: string; label: string };

const GENERIC_FEATURES = [
  "Premium quality fabric sourced for lasting durability",
  "Professionally tailored and finished",
  "Custom sizing & colour options available",
];

const CATEGORY_APPLICATIONS: Record<string, string[]> = {
  window: ["Windows", "Living rooms & bedrooms", "Residential & commercial interiors"],
  door: ["Main doors, sliding & French doors", "Entryways & balconies"],
  special: ["Specialty window treatments", "Drapery, layering & motorized setups"],
};
const DEFAULT_APPLICATIONS = [
  "Living rooms & bedrooms",
  "Residential & commercial interiors",
  "Custom interior projects",
];

export default function ProductGrid({
  products,
  categories,
}: {
  products: Product[];
  categories?: readonly Category[];
}) {
  const [selected, setSelected] = useState<Product | null>(null);
  const [active, setActive] = useState("all");

  const visible = active === "all" ? products : products.filter((p) => p.category === active);
  const applications = selected
    ? (selected.category && CATEGORY_APPLICATIONS[selected.category]) || DEFAULT_APPLICATIONS
    : [];

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
          <TiltCard className="product-card" key={p.slug} onClick={() => setSelected(p)}>
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
                  <i className="fa-solid fa-circle-info" /> View Details
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

      {selected && (
        <div className="fabric-modal open" onClick={() => setSelected(null)}>
          <button className="fabric-modal-close" aria-label="Close" onClick={() => setSelected(null)}>
            <i className="fa-solid fa-xmark" />
          </button>

          <div className="fabric-modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="fabric-modal-image">
              <Image
                src={uw(selected.imageId, 1600)}
                alt={selected.name}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </div>
            <div className="fabric-modal-info">
              <p className="eyebrow">Damask Textile Pakistan</p>
              <h3>{selected.name}</h3>
              <p className="fabric-modal-desc">{selected.description}</p>

              <p className="fabric-modal-section-title">Main Features &amp; Usage</p>
              <ul className="fabric-modal-list">
                {GENERIC_FEATURES.map((f) => (
                  <li key={f}>
                    <i className="fa-solid fa-check" /> {f}
                  </li>
                ))}
              </ul>

              <p className="fabric-modal-section-title">Suitable Applications</p>
              <ul className="fabric-modal-list">
                {applications.map((a) => (
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
    </>
  );
}
