export type Product = {
  slug: string;
  name: string;
  description: string;
  imageId: string;
  category?: string;
};

export const curtainCategories = [
  { key: "all", label: "All" },
  { key: "window", label: "Window Curtains" },
  { key: "door", label: "Door Curtains" },
  { key: "special", label: "Special Styles" },
] as const;

export const curtains: Product[] = [
  // ---------------- Window Curtains (Room & Style Variants) ----------------
  {
    slug: "modern-living-room-curtain",
    name: "Modern Living Room Curtain",
    description: "Textured neutral drapery styled for a bright, contemporary living room.",
    imageId: "1754611380518-61a923cc47ca",
    category: "window",
  },
  {
    slug: "cream-living-room-curtain",
    name: "Cream Living Room Curtain",
    description: "Soft cream grommet curtains that bring warmth to a relaxed living space.",
    imageId: "1771039622311-24e73898b641",
    category: "window",
  },
  {
    slug: "ivory-boho-curtain",
    name: "Ivory Boho Curtain",
    description: "Ivory-toned curtains paired with natural textures for a relaxed, boho-luxe feel.",
    imageId: "1771039621838-4c8dd6ae0f9d",
    category: "window",
  },
  {
    slug: "beige-designer-curtain",
    name: "Beige Designer Curtain",
    description: "Warm beige drapery styled beneath statement pendant lighting for a designer finish.",
    imageId: "1771039622237-2725bdf33edf",
    category: "window",
  },
  {
    slug: "contemporary-curtain",
    name: "Contemporary Curtain",
    description: "Soft blue-grey curtains suited to calm, contemporary interiors.",
    imageId: "1771039621738-9613addbf0dc",
    category: "window",
  },
  {
    slug: "sheer-curtain-morning-light",
    name: "Sheer Curtain in Morning Light",
    description: "Gauzy sheer fabric that glows beautifully as morning sunlight filters through.",
    imageId: "1598414381594-18d86505f5d5",
    category: "window",
  },
  {
    slug: "bay-window-curtain",
    name: "Bay Window Curtain",
    description: "Golden drapery framing a curved bay window lounge with panoramic views.",
    imageId: "1678043006450-05c2697ce6bd",
    category: "window",
  },
  {
    slug: "dining-room-curtain",
    name: "Dining Room Curtain",
    description: "Ornate formal drapery that elevates a grand dining room beneath a chandelier.",
    imageId: "1628985095652-cb94d4c263dc",
    category: "window",
  },
  {
    slug: "large-window-curtain",
    name: "Large Window Curtain",
    description: "Tailored styling built to frame expansive, floor-to-ceiling window walls.",
    imageId: "1696986293936-d8d080a88f50",
    category: "window",
  },
  {
    slug: "kitchen-window-curtain",
    name: "Kitchen Window Curtain",
    description: "A soft roller shade that filters bright morning light over the kitchen sink.",
    imageId: "1750658080060-54668f9dd29a",
    category: "window",
  },
  {
    slug: "designer-sheer-curtain",
    name: "Designer Sheer Curtain",
    description: "Sculpted sheer drapery styled with warm orange accents for a designer living room.",
    imageId: "1753791913941-efa7de4e1b5c",
    category: "window",
  },
  {
    slug: "sunset-glow-sheer-curtain",
    name: "Sunset Glow Sheer Curtain",
    description: "Warm-toned sheers that catch the golden hour for a cozy, radiant ambiance.",
    imageId: "1696485804806-77f1a3eb63ac",
    category: "window",
  },
  {
    slug: "modern-white-curtain",
    name: "Modern White Curtain",
    description: "Crisp white curtains with a soft ombre fade for a clean, modern edge.",
    imageId: "1599280611965-bef72efc48fb",
    category: "window",
  },
  {
    slug: "white-curtain-gallery-wall",
    name: "White Curtain & Gallery Wall Styling",
    description: "Flowing white curtains styled alongside a framed gallery wall for a curated look.",
    imageId: "1515521761069-02158f96cac7",
    category: "window",
  },
  {
    slug: "small-window-curtain",
    name: "Small Window Curtain",
    description: "Tailored for compact windows, keeping a minimalist apartment feeling bright and open.",
    imageId: "1768609239321-1cfe14893e80",
    category: "window",
  },
  {
    slug: "sunlit-sheer-curtain",
    name: "Sunlit Sheer Curtain",
    description: "Airy sheer panels pooling softly onto the windowsill in warm afternoon light.",
    imageId: "1588840908083-3b854a29ee5f",
    category: "window",
  },

  // ---------------- Door Curtains (More Styles) ----------------
  {
    slug: "balcony-door-curtain",
    name: "Balcony Door Curtain",
    description: "Soft, floor-length drapery that frames a bedroom's balcony doors beautifully.",
    imageId: "1644955052489-10bda5c94b19",
    category: "door",
  },
  {
    slug: "balcony-door-curtain-garden-view",
    name: "Balcony Door Curtain: Garden View",
    description: "Light-filtering panels framing french balcony doors that open onto a garden view.",
    imageId: "1744039932780-1819b9ddeb84",
    category: "door",
  },
  {
    slug: "main-door-curtain",
    name: "Main Door Curtain",
    description: "Sheer entryway curtains that soften a glass front door while preserving light.",
    imageId: "1464770582314-bdfcd7edb642",
    category: "door",
  },

  // ---------------- Special Styles (More Options) ----------------
  {
    slug: "dramatic-layered-drape",
    name: "Dramatic Layered Drape",
    description: "Moody blackout linen layered over sheer for striking contrast and light control.",
    imageId: "1674951780257-58bb3b7038e5",
    category: "special",
  },
];
