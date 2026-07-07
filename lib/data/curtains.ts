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
  // ---------------- Window Curtains ----------------
  {
    slug: "sheer-curtain",
    name: "Sheer Curtain",
    description:
      "Lightweight, airy fabric that filters natural light while preserving an open, breezy feel.",
    imageId: "1522708323590-d24dbb6b0267",
    category: "window",
  },
  {
    slug: "blackout-curtain",
    name: "Blackout Curtain",
    description:
      "Dense, light-blocking fabric paired with soft folds for total privacy without losing elegance.",
    imageId: "1595846519845-68e298c2edd8",
    category: "window",
  },
  {
    slug: "velvet-curtain",
    name: "Velvet Curtain",
    description: "Rich, heavyweight drapery that adds depth and warmth to any luxury living space.",
    imageId: "1605774337664-7a846e9cdf17",
    category: "window",
  },
  {
    slug: "silk-curtain",
    name: "Silk Curtain",
    description:
      "Lustrous silk-finish curtains that catch the light for an opulent, hotel-like glow.",
    imageId: "1554295405-abb8fd54f153",
    category: "window",
  },
  {
    slug: "linen-curtain",
    name: "Linen Curtain",
    description: "Natural, breathable linen that softens daylight with an effortless, textured look.",
    imageId: "1473252812967-d565c3607e28",
    category: "window",
  },
  {
    slug: "bedroom-curtain",
    name: "Bedroom Curtain",
    description: "Soft, light-filtering drapery that turns golden-hour sunlight into a warm bedroom glow.",
    imageId: "1698241025739-e1ab506b0f5e",
    category: "window",
  },
  {
    slug: "printed-curtain",
    name: "Printed Curtain",
    description: "Statement prints that bring personality and artistic flair to a room's windows.",
    imageId: "1600166898405-da9535204843",
    category: "window",
  },
  {
    slug: "embroidered-curtain",
    name: "Embroidered Curtain",
    description: "Delicately detailed textures finished with hand-stitched embroidery accents.",
    imageId: "1615876234886-fd9a39fda97f",
    category: "window",
  },
  {
    slug: "layered-curtain",
    name: "Layered Curtain",
    description:
      "Sheer and blackout layers combined for adjustable light control and a tailored finish.",
    imageId: "1600121848594-d8644e57abab",
    category: "window",
  },
  {
    slug: "modern-curtain",
    name: "Modern Curtain",
    description: "Clean-lined, minimal drapery designed for contemporary interiors.",
    imageId: "1616486029423-aaa4789e8c9a",
    category: "window",
  },
  {
    slug: "classic-curtain",
    name: "Classic Curtain",
    description:
      "Timeless plantation-style treatment that suits traditional and transitional interiors alike.",
    imageId: "1616137466211-f939a420be84",
    category: "window",
  },
  {
    slug: "luxury-hotel-style-curtain",
    name: "Luxury Hotel-Style Curtain",
    description: "Floor-to-ceiling drapery inspired by five-star hospitality interiors.",
    imageId: "1571508601891-ca5e7a713859",
    category: "window",
  },

  // ---------------- Door Curtains ----------------
  {
    slug: "long-door-curtain",
    name: "Long Door Curtain",
    description: "Full-length drapery that softens tall doorways with an elegant, uninterrupted fall.",
    imageId: "1702255489644-392758161f1f",
    category: "door",
  },
  {
    slug: "sliding-door-curtain",
    name: "Sliding Door Curtain",
    description: "Wide-track styling designed to glide smoothly alongside sliding glass doors.",
    imageId: "1604014237800-1c9102c219da",
    category: "door",
  },
  {
    slug: "french-door-curtain",
    name: "French Door Curtain",
    description: "Tailored panels that frame French doors while still allowing them to open freely.",
    imageId: "1621215040051-a6fe2c73f1af",
    category: "door",
  },
  {
    slug: "decorative-door-curtain",
    name: "Decorative Door Curtain",
    description: "Ornamental styling that turns an entryway into a designed feature of the room.",
    imageId: "1780246032961-6a3e21d7e5dd",
    category: "door",
  },

  // ---------------- Special Curtain Styles ----------------
  {
    slug: "eyelet-curtain",
    name: "Eyelet Curtain",
    description: "Modern grommet header that glides smoothly for a clean, contemporary fold.",
    imageId: "1498848672066-37f29478af93",
    category: "special",
  },
  {
    slug: "pleated-curtain",
    name: "Pleated Curtain",
    description: "Structured, uniform pleats that hold their shape for a tailored, formal finish.",
    imageId: "1578337834535-357ad7dccdfd",
    category: "special",
  },
  {
    slug: "rod-pocket-curtain",
    name: "Rod Pocket Curtain",
    description: "A classic gathered header that slides directly onto the rod for soft, relaxed folds.",
    imageId: "1519035350952-38d18a3848cf",
    category: "special",
  },
  {
    slug: "pinch-pleat-curtain",
    name: "Pinch Pleat Curtain",
    description: "Hand-pinched triple pleats for a refined, couture-level drapery header.",
    imageId: "1567538096630-e0c55bd6374c",
    category: "special",
  },
  {
    slug: "roman-blinds",
    name: "Roman Blinds",
    description: "Fabric shades that fold into crisp horizontal pleats for a tailored, soft-structured look.",
    imageId: "1522444195799-478538b28823",
    category: "special",
  },
  {
    slug: "roller-blinds",
    name: "Roller Blinds",
    description: "Sleek, low-profile shades that roll away completely for an unobstructed view.",
    imageId: "1603299938527-d035bc6fc2c8",
    category: "special",
  },
  {
    slug: "motorized-curtains",
    name: "Motorized Curtains",
    description: "Remote and app-controlled operation for effortless, smart-home curtain automation.",
    imageId: "1583847268964-b28dc8f51f92",
    category: "special",
  },
  {
    slug: "luxury-drapes",
    name: "Luxury Drapes",
    description: "Dramatic, floor-sweeping drapery that makes a grand statement in any luxury room.",
    imageId: "1659282386282-d7145e593bad",
    category: "special",
  },

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
    slug: "grey-window-curtain",
    name: "Grey Window Curtain",
    description: "Cool grey tones offering a versatile, modern backdrop for any room palette.",
    imageId: "1771039622303-71545f266c1b",
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
    slug: "luxury-red-velvet-curtain",
    name: "Luxury Red Velvet Curtain",
    description: "Deep red velvet in dramatic, sculptural folds for a bold luxury statement.",
    imageId: "1633523225779-3638cd0c2009",
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
    slug: "white-curtain-detail",
    name: "White Curtain Detail",
    description: "A close, textural look at soft white drapery pooling onto a wooden floor.",
    imageId: "1467635624863-33cf388d9a2e",
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
    name: "Balcony Door Curtain – Garden View",
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

  // ---------------- Blinds & Special Styles (More Options) ----------------
  {
    slug: "wooden-blinds",
    name: "Wooden Blinds",
    description: "Natural wood slat blinds that cast warm, layered light across the room.",
    imageId: "1582265214834-c02ec775947b",
    category: "special",
  },
  {
    slug: "warm-wooden-blinds",
    name: "Warm Wooden Blinds",
    description: "Rich wood-tone blinds offering an organic, textured alternative to fabric curtains.",
    imageId: "1622605058034-5cbf25d135de",
    category: "special",
  },
  {
    slug: "office-window-blinds",
    name: "Office Window Blinds",
    description: "Crisp white blinds suited to bright, professional office and study spaces.",
    imageId: "1609423433459-a65b330ef5da",
    category: "special",
  },
  {
    slug: "office-vertical-blinds",
    name: "Office Vertical Blinds",
    description: "Vertical fabric blinds offering adjustable privacy for commercial interiors.",
    imageId: "1778086572533-3949651f7ac9",
    category: "special",
  },
  {
    slug: "dramatic-layered-drape",
    name: "Dramatic Layered Drape",
    description: "Moody blackout linen layered over sheer for striking contrast and light control.",
    imageId: "1674951780257-58bb3b7038e5",
    category: "special",
  },
];
