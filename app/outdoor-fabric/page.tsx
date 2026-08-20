import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import CollectionCrossLinks from "@/components/CollectionCrossLinks";
import OutdoorFabricShowcase from "@/components/OutdoorFabricShowcase";

export const metadata: Metadata = {
  title: "Outdoor Fabric Collection | Damask Textile Pakistan",
  description:
    "Explore our Outdoor Fabric Collection, weather-resistant, fade-proof upholstery and drapery fabric built for patios, lounges and al-fresco living spaces in Karachi.",
};

export default function OutdoorFabricPage() {
  return (
    <main>
      <PageHero
        image="/outdoor-fabric/photo-1.jpg"
        eyebrow="Outdoor Fabric Collection"
        title="Outdoor Fabric Collection"
        description="Weather-resistant, fade-proof fabric engineered for patios, lounges and outdoor living, without compromising on luxury."
        crumb="Outdoor Fabric"
      />

      <OutdoorFabricShowcase />

      <CtaBanner />

      <CollectionCrossLinks current="/outdoor-fabric" />
    </main>
  );
}
