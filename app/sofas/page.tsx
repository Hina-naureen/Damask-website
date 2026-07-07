import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import CollectionCrossLinks from "@/components/CollectionCrossLinks";
import { sofas } from "@/lib/data/sofas";

export const metadata: Metadata = {
  title: "Premium Sofa Collection | Damask Textile Pakistan",
  description:
    "Browse our premium sofa gallery — L-shape, Chesterfield, leather, fabric, recliner, sectional and custom designer sofas crafted for luxury Karachi homes.",
};

export default function SofasPage() {
  return (
    <main>
      <PageHero
        imageId="1617806118233-18e1de247200"
        eyebrow="Furniture & Sofa Collection"
        title="Premium Sofa Collection"
        description="Eleven signature sofa styles — from tailored Chesterfields to minimalist lounge seating — built to anchor every living room."
        crumb="Sofas"
      />

      <section className="portfolio">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Showroom</p>
            <h2>Sofa Styles &amp; Upholstery</h2>
            <p className="section-desc">
              Each design is available in a range of premium fabrics, leathers and finishes,
              tailored to your space.
            </p>
          </Reveal>
          <ProductGrid products={sofas} />
        </div>
      </section>

      <CtaBanner />

      <CollectionCrossLinks current="/sofas" />
    </main>
  );
}
