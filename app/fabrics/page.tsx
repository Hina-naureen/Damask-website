import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import CollectionCrossLinks from "@/components/CollectionCrossLinks";
import { fabrics } from "@/lib/data/fabrics";

export const metadata: Metadata = {
  title: "Designer Fabric Collection | Damask Textile Pakistan",
  description:
    "Explore our designer fabric collection — velvet, silk, leather, linen, jacquard damask and printed textiles sourced for premium interiors in Karachi.",
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
            <p className="eyebrow">Showroom</p>
            <h2>Fabrics &amp; Textile Library</h2>
            <p className="section-desc">
              Every weave, weight and finish available to sample — velvet, silk, leather, linen
              and more.
            </p>
          </Reveal>
          <ProductGrid products={fabrics} />
        </div>
      </section>

      <CtaBanner />

      <CollectionCrossLinks current="/fabrics" />
    </main>
  );
}
