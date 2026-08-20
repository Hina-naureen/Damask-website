import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import CollectionCrossLinks from "@/components/CollectionCrossLinks";
import LuxurySofaShowcase from "@/components/LuxurySofaShowcase";

export const metadata: Metadata = {
  title: "Premium Sofa Collection | Damask Textile Pakistan",
  description:
    "Browse our premium sofa gallery, featuring L-shape, Chesterfield, leather, fabric, recliner, sectional and custom designer sofas crafted for luxury Karachi homes.",
};

export default function SofasPage() {
  return (
    <main>
      <PageHero
        imageId="1617806118233-18e1de247200"
        eyebrow="Furniture & Sofa Collection"
        title="Premium Sofa Collection"
        description="Eleven signature sofa styles, from tailored Chesterfields to minimalist lounge seating, built to anchor every living room."
        crumb="Sofas"
      />

      <LuxurySofaShowcase />

      <CtaBanner />

      <CollectionCrossLinks current="/sofas" />
    </main>
  );
}
