import MediaShowcase from "./MediaShowcase";

const photos = [
  "/curtain-collection/photo-1.jpg",
  "/curtain-collection/photo-2.jpg",
  "/curtain-collection/photo-3.jpg",
  "/curtain-collection/photo-4.jpg",
  "/curtain-collection/photo-5.jpg",
  "/curtain-collection/photo-6.jpg",
  "/curtain-collection/photo-7.jpg",
  "/curtain-collection/photo-8.jpg",
  "/curtain-collection/photo-9.jpg",
];

const videos = [
  "/curtain-collection/video-1.mp4",
  "/curtain-collection/video-2.mp4",
  "/curtain-collection/video-3.mp4",
  "/curtain-collection/video-4.mp4",
  "/curtain-collection/video-5.mp4",
  "/curtain-collection/video-6.mp4",
  "/curtain-collection/video-7.mp4",
];

export default function CurtainShowcase() {
  return (
    <MediaShowcase
      id="curtain-showcase"
      eyebrow="Signature Showroom"
      title="Curtain Collection"
      description="A closer look at our premium curtain range — tailored drapery and finishes captured in photos and video."
      cardLabel="Curtain Collection"
      photos={photos}
      videos={videos}
      details={{
        description:
          "Tailored drapery fabric finished to a five-star standard — from heavyweight blackout to airy sheers, styled for every window and door.",
        features: [
          "Premium drapery-grade fabric",
          "Tailored stitching & finished hems",
          "Wide range of textures — velvet, silk, sheer & linen",
          "Custom sizing available",
        ],
        applications: [
          "Windows & doors",
          "Living rooms & bedrooms",
          "Offices & showrooms",
          "Hotels & hospitality interiors",
        ],
      }}
    />
  );
}
