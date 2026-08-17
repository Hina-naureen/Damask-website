import type { Metadata } from "next";
import CatalogGrid from "@/components/CatalogGrid";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { catalogs } from "@/lib/data/catalogs";

export const metadata: Metadata = {
  title: "Fabric Catalogs | Damask Textile Pakistan",
  description:
    "Browse all Damask Textile Pakistan fabric catalogs — Almas Collection, Damask Classic, Blackout Fabric, Linen Sofa, New Arrivals and Water Repellent Fabric, organized by catalog number.",
};

export default function CatalogsPage() {
  return (
    <main>
      <section className="catalogs-page-header">
        <div className="container">
          <div className="breadcrumb" style={{ color: "rgba(33, 28, 24, 0.55)" }}>
            <a href="/" style={{ color: "var(--orange)" }}>
              Home
            </a>{" "}
            <span>/</span> <span>Catalogs</span>
          </div>
          <p className="eyebrow">Fabric Library</p>
          <h1>Our Fabric Catalogs</h1>
          <p className="section-desc" style={{ margin: "12px 0 0", maxWidth: 640 }}>
            Every catalog we carry, organized by collection and catalog number — browse the full
            swatch library before booking your consultation.
          </p>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Showroom</p>
            <h2>Browse By Collection</h2>
            <p className="section-desc">
              Each catalog opens with its cover, followed by fabric detail sheets and the full
              numbered swatch gallery.
            </p>
          </Reveal>
          <CatalogGrid catalogs={catalogs} />
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
