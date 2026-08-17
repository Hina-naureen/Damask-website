"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import StaggerReveal from "./StaggerReveal";
import TiltCard from "./TiltCard";
import type { Fabric } from "@/lib/data/catalogs";

const SPEC_ROWS: { key: keyof NonNullable<Fabric["spec"]>; label: string }[] = [
  { key: "catNo", label: "Catalog No." },
  { key: "serialNo", label: "Serial No." },
  { key: "composition", label: "Composition" },
  { key: "width", label: "Width" },
  { key: "weight", label: "Weight" },
  { key: "suitableFor", label: "Suitable For" },
  { key: "washingInstruction", label: "Care Instructions" },
  { key: "feature", label: "Feature" },
];

export default function FabricGallery({ fabrics, catalogName }: { fabrics: Fabric[]; catalogName: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = activeIndex !== null ? fabrics[activeIndex] : null;

  function open(i: number) {
    setActiveIndex(i);
  }
  function close() {
    setActiveIndex(null);
  }
  function next() {
    setActiveIndex((i) => (i === null ? null : (i + 1) % fabrics.length));
  }
  function prev() {
    setActiveIndex((i) => (i === null ? null : (i - 1 + fabrics.length) % fabrics.length));
  }

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <>
      <StaggerReveal className="product-grid fabric-grid" stagger={0.04}>
        {fabrics.map((f, i) => (
          <TiltCard className="product-card" key={f.number} onClick={() => open(i)}>
            <div className="product-media">
              <div className="product-frame" />
              <Image
                src={f.image}
                alt={`${catalogName} — Fabric ${f.number}`}
                fill
                sizes="(max-width: 700px) 50vw, (max-width: 1080px) 33vw, 25vw"
              />
              <div className="product-overlay">
                <strong>Fabric {f.number}</strong>
                <span>
                  <i className="fa-solid fa-magnifying-glass-plus" /> View Details
                </span>
              </div>
              <div className="product-shine" />
            </div>
          </TiltCard>
        ))}
      </StaggerReveal>

      {active && (
        <div className="fabric-modal open" onClick={close}>
          <button className="fabric-modal-close" aria-label="Close" onClick={close}>
            <i className="fa-solid fa-xmark" />
          </button>

          <button
            className="fabric-modal-nav fabric-modal-prev"
            aria-label="Previous fabric"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div className="fabric-modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="fabric-modal-image">
              <Image
                src={active.image}
                alt={`${catalogName} — Fabric ${active.number}`}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </div>
            <div className="fabric-modal-info">
              <p className="eyebrow">{catalogName}</p>
              <h3>Fabric {active.number}</h3>
              {active.spec ? (
                <dl className="fabric-spec-list">
                  {SPEC_ROWS.filter((row) => active.spec?.[row.key]).map((row) => (
                    <div className="fabric-spec-row" key={row.key}>
                      <dt>{row.label}</dt>
                      <dd>{active.spec?.[row.key]}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="fabric-modal-label">
                  <i className="fa-solid fa-circle-info" /> Fabric swatch — no written specification
                  provided for this item
                </p>
              )}
              <p className="fabric-modal-count">
                {active.number} of {fabrics.length}
              </p>
            </div>
          </div>

          <button
            className="fabric-modal-nav fabric-modal-next"
            aria-label="Next fabric"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      )}
    </>
  );
}
