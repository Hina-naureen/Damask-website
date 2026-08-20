import MediaShowcase from "./MediaShowcase";

const photos = [
  "/curtain-collection/photo-8.jpg",
  "/curtain-collection/photo-9.jpg",
  "/curtain-collection/photo-10.jpg",
  "/curtain-collection/photo-12.jpg",
  "/curtain-collection/photo-13.jpg",
  "/curtain-collection/photo-14.jpg",
  "/curtain-collection/photo-15.jpg",
  "/curtain-collection/photo-16.jpg",
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
      eyebrow="Signature Collection"
      title="Curtain Collection"
      description="A closer look at our premium curtain range, tailored drapery and finishes captured in photos and video."
      cardLabel="Curtain Collection"
      photos={photos}
      videos={videos}
      details={{
        description:
          "Tailored drapery fabric finished to a five-star standard, from heavyweight blackout to airy sheers, styled for every window and door.",
        features: [
          "Premium drapery-grade fabric",
          "Tailored stitching & finished hems",
          "Wide range of textures: velvet, silk, sheer & linen",
          "Custom sizing available",
        ],
        applications: [
          "Windows & doors",
          "Living rooms & bedrooms",
          "Offices & retail spaces",
          "Hotels & hospitality interiors",
        ],
      }}
    />
  );
}
