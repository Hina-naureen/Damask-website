export type Service = {
  slug: string;
  title: string;
  icon: string;
  imageId: string;
  items: string[];
  href?: string;
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Luxury Residential Interiors",
    icon: "fa-solid fa-couch",
    imageId: "1615874959474-d609969a20ed",
    items: ["Living Room Design", "Bedroom Interiors", "Dining Spaces", "Luxury Villas", "Apartment Makeover"],
  },
  {
    slug: "furniture",
    title: "Furniture & Sofa Design",
    icon: "fa-solid fa-chair",
    imageId: "1586105251261-72a756497a11",
    items: ["Designer Sofas", "Custom Furniture", "Coffee Tables", "Luxury Chairs", "Modern Arrangements"],
    href: "/sofas",
  },
  {
    slug: "curtains",
    title: "Curtain & Textile Solutions",
    icon: "fa-solid fa-scroll",
    imageId: "1616137466211-f939a420be84",
    items: ["Premium Curtains", "Designer Fabrics", "Window Styling", "Luxury Drapes", "Modern Blinds"],
    href: "/curtains",
  },
  {
    slug: "wall-ceiling",
    title: "Wall & Ceiling Design",
    icon: "fa-solid fa-border-all",
    imageId: "1615529182904-14819c35db37",
    items: ["Wallpaper", "Decorative Walls", "Wooden Panels", "False Ceilings", "Artistic Designs"],
    href: "/furniture",
  },
  {
    slug: "lighting",
    title: "Lighting Design",
    icon: "fa-solid fa-lightbulb",
    imageId: "1540932239986-30128078f3c5",
    items: ["Chandeliers", "Modern Lights", "Ambient Lighting", "Luxury Illumination", "Accent Fixtures"],
    href: "/furniture",
  },
  {
    slug: "commercial",
    title: "Commercial Interiors",
    icon: "fa-solid fa-building",
    imageId: "1497366216548-37526070297c",
    items: ["Offices", "Restaurants", "Hotels", "Retail Spaces", "Reception Areas"],
  },
];
