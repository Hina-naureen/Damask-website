import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CatalogGrid from "@/components/CatalogGrid";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import CollectionCrossLinks from "@/components/CollectionCrossLinks";
import { catalogs } from "@/lib/data/catalogs";

export const metadata: Metadata = {
  title: "Designer Fabric Collection | Damask Textile Pakistan",
  description:
    "Browse the Damask Textile Pakistan fabric catalogs — Almas Collection, Damask Classic, Blackout Fabric, Linen Sofa, New Arrivals and Water Repellent Fabric.",
};

export default function FabricsPage() {
  return (
    <main>
      <PageHero
        imageId="1771098206750-6be5aef4f503"
        eyebrow="Fabric Collection"
        title="Designer Fabric Collection"
        description="From the same textile heritage as Damask Textile Pakistan — a curated library of premium fabrics for every finish."
        crumb="Fabrics"
      />

      <section className="portfolio">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Catalog Library</p>
            <h2>Browse Our Fabric Catalogs</h2>
            <p className="section-desc">
              Open any catalog to flip through its cover, fabric detail sheets and full numbered
              swatch gallery.
            </p>
          </Reveal>
          <CatalogGrid catalogs={catalogs} />
        </div>
      </section>

      <CtaBanner />

      <CollectionCrossLinks current="/fabrics" />
    </main>
  );
}
