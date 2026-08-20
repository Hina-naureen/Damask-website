import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import CollectionCrossLinks from "@/components/CollectionCrossLinks";
import CurtainShowcase from "@/components/CurtainShowcase";
import { curtains, curtainCategories } from "@/lib/data/curtains";

export const metadata: Metadata = {
  title: "Luxury Curtains Collection | Damask Textile Pakistan",
  description:
    "Explore our luxury curtain collection, featuring window curtains, door curtains and special styles including velvet, silk, blackout, sheer, eyelet, pleated and motorized curtains for premium interiors in Karachi.",
};

export default function CurtainsPage() {
  return (
    <main>
      <PageHero
        image="/curtain-collection/photo-7.jpg"
        eyebrow="Curtain & Textile Collection"
        title="Luxury Curtains Collection"
        description="From heavyweight velvet to motorized smart curtains, discover 23 premium styles crafted to elevate every window and door in your home."
        crumb="Curtains"
      />

      <CurtainShowcase />

      <section className="portfolio">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Collection</p>
            <h2>Curtain Styles &amp; Fabrics</h2>
            <p className="section-desc">
              Window curtains, door curtains and special styles, each tailored in premium fabric
              and finished to a five-star standard.
            </p>
          </Reveal>
          <ProductGrid products={curtains} categories={curtainCategories} />
        </div>
      </section>

      <CtaBanner />

      <CollectionCrossLinks current="/curtains" />
    </main>
  );
}
