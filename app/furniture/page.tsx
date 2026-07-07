import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import CollectionCrossLinks from "@/components/CollectionCrossLinks";
import { furniture } from "@/lib/data/furniture";

export const metadata: Metadata = {
  title: "Furniture & Interior Collection | Damask Textile Pakistan",
  description:
    "Cushions, tables, chairs, beds, cabinets, wall decoration, lighting, wallpapers, ceiling designs and complete room setups from Damask Textile Pakistan.",
};

export default function FurniturePage() {
  return (
    <main>
      <PageHero
        imageId="1604014237800-1c9102c219da"
        eyebrow="Furniture & Interior Collection"
        title="Furniture & Interior Collection"
        description="Every finishing touch — from cushions and cabinets to lighting and ceiling design — styled as a complete, luxury interior."
        crumb="Furniture & Interior"
      />

      <section className="portfolio">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Showroom</p>
            <h2>Interior Elements &amp; Finishing</h2>
            <p className="section-desc">
              A complete catalogue of the details that turn a room into a fully realized interior.
            </p>
          </Reveal>
          <ProductGrid products={furniture} />
        </div>
      </section>

      <CtaBanner />

      <CollectionCrossLinks current="/furniture" />
    </main>
  );
}
