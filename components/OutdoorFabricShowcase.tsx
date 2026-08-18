import MediaShowcase from "./MediaShowcase";

const photos = Array.from({ length: 15 }, (_, i) => `/outdoor-fabric/photo-${i + 1}.jpg`);
const videos = ["/outdoor-fabric/video-1.mp4"];

export default function OutdoorFabricShowcase() {
  return (
    <MediaShowcase
      id="outdoor-fabric-showcase"
      eyebrow="Signature Showroom"
      title="Outdoor Fabric Collection"
      description="Weather-resistant, fade-proof outdoor fabrics for patios, lounges and al-fresco living — captured in photos and video."
      cardLabel="Outdoor Fabric Collection"
      photos={photos}
      videos={videos}
      details={{
        description:
          "Weather-resistant, fade-proof outdoor fabric engineered for patios, lounges and al-fresco living — built to withstand sun, rain and daily outdoor use without compromising on luxury.",
        features: [
          "Weather & water-resistant finish",
          "UV-resistant, fade-proof colours",
          "Durable, easy-clean fabric",
          "Mould & mildew resistant",
        ],
        applications: [
          "Outdoor patios & lounges",
          "Poolside & garden furniture",
          "Balconies & terraces",
          "Outdoor cushions & upholstery",
        ],
      }}
    />
  );
}
