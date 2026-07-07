import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import CollectionCrossLinks from "@/components/CollectionCrossLinks";
import { cushions } from "@/lib/data/cushions";

export const metadata: Metadata = {
  title: "Luxury Cushion Collection | Damask Textile Pakistan",
  description:
    "Discover our premium cushion collection — velvet, botanical print, knit-textured, patterned throw and custom cushion covers styled for luxury interiors in Karachi.",
};

export default function CushionsPage() {
  return (
    <main>
      <PageHero
        imageId="1531592762598-58a792d73aed"
        eyebrow="Cushion Collection"
        title="Luxury Cushion Collection"
        description="Layered textures and rich colors — the finishing detail that pulls every sofa and bed together."
        crumb="Cushions"
      />

      <section className="portfolio">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Showroom</p>
            <h2>Cushions &amp; Soft Furnishings</h2>
            <p className="section-desc">
              Curated cushion styles in premium fabrics, ready to style or fully customize to your
              palette.
            </p>
          </Reveal>
          <ProductGrid products={cushions} />
        </div>
      </section>

      <CtaBanner />

      <CollectionCrossLinks current="/cushions" />
    </main>
  );
}
