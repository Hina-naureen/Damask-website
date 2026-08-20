import MediaShowcase from "./MediaShowcase";

const photos = [
  "/luxury-sofa/photo-1.jpg",
  "/luxury-sofa/photo-2.jpg",
  "/luxury-sofa/photo-3.jpg",
  "/luxury-sofa/photo-4.jpg",
  "/luxury-sofa/photo-5.jpg",
  "/luxury-sofa/photo-6.jpg",
  "/luxury-sofa/photo-7.jpg",
];

const videos = [
  "/luxury-sofa/video-1.mp4",
  "/luxury-sofa/video-2.mp4",
  "/luxury-sofa/video-3.mp4",
  "/luxury-sofa/video-4.mp4",
  "/luxury-sofa/video-5.mp4",
  "/luxury-sofa/video-6.mp4",
  "/luxury-sofa/video-7.mp4",
  "/luxury-sofa/video-8.mp4",
];

export default function LuxurySofaShowcase() {
  return (
    <MediaShowcase
      id="luxury-sofa"
      eyebrow="Signature Collection"
      title="Luxury Sofa Collection"
      description="An exclusive look at our Luxury Sofa line, premium upholstery, tailored comfort and boutique-grade craftsmanship, captured in photos and video."
      cardLabel="Luxury Sofa"
      photos={photos}
      videos={videos}
      details={{
        description:
          "Statement seating crafted from premium upholstery fabric, designed to anchor luxury living rooms with plush comfort, a refined silhouette and lasting durability.",
        features: [
          "Premium, soft-touch upholstery fabric",
          "Dense foam cushioning for lasting comfort",
          "Reinforced hardwood frame built for daily use",
          "Available in a range of premium fabric finishes & colours",
        ],
        applications: [
          "Living rooms & lounges",
          "Formal sitting areas",
          "Hotel & hospitality interiors",
          "Custom-built sofa sets",
        ],
      }}
    />
  );
}
