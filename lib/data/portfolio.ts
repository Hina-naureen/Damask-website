export type PortfolioItem = {
  imageId: string;
  title: string;
  category:
    | "living"
    | "bedroom"
    | "curtain"
    | "sofa"
    | "cushion"
    | "furniture"
    | "lighting"
    | "wallpaper"
    | "villa"
    | "office"
    | "kitchen";
  tag: string;
};

export const portfolioCategories = [
  { key: "all", label: "All" },
  { key: "living", label: "Living Rooms" },
  { key: "bedroom", label: "Bedrooms" },
  { key: "curtain", label: "Curtains" },
  { key: "sofa", label: "Sofas" },
  { key: "cushion", label: "Cushions" },
  { key: "furniture", label: "Furniture" },
  { key: "lighting", label: "Lighting" },
  { key: "wallpaper", label: "Wallpapers" },
  { key: "villa", label: "Villas" },
  { key: "office", label: "Offices" },
] as const;

export const portfolio: PortfolioItem[] = [
  { imageId: "1618221195710-dd6b41faaea6", title: "Luxury Living Room", category: "living", tag: "Residential" },
  { imageId: "1567016432779-094069958ea5", title: "Designer Living Space", category: "living", tag: "Residential" },

  { imageId: "1616627561950-9f746e330187", title: "Elegant Bedroom Suite", category: "bedroom", tag: "Residential" },
  { imageId: "1522771739844-6a9f6d5f14af", title: "Master Bedroom Design", category: "bedroom", tag: "Residential" },

  { imageId: "1554295405-abb8fd54f153", title: "Designer Curtain Styling", category: "curtain", tag: "Textile" },
  { imageId: "1600121848594-d8644e57abab", title: "Layered Curtain Design", category: "curtain", tag: "Textile" },

  { imageId: "1617806118233-18e1de247200", title: "Leather Sofa Setting", category: "sofa", tag: "Furniture" },
  { imageId: "1493663284031-b7e3aefcae8e", title: "Chesterfield Sofa Corner", category: "sofa", tag: "Furniture" },

  { imageId: "1531592762598-58a792d73aed", title: "Velvet Cushion Styling", category: "cushion", tag: "Textile" },
  { imageId: "1553114552-c4ece3a33c93", title: "Patterned Cushion Display", category: "cushion", tag: "Textile" },

  { imageId: "1586105251261-72a756497a11", title: "High-End Furniture", category: "furniture", tag: "Furniture" },
  { imageId: "1512918728675-ed5a9ecdebfd", title: "Curated Furniture Corner", category: "furniture", tag: "Furniture" },

  { imageId: "1540932239986-30128078f3c5", title: "Statement Chandelier", category: "lighting", tag: "Lighting" },
  { imageId: "1565538810643-b5bdb714032a", title: "Kitchen Pendant Lighting", category: "lighting", tag: "Lighting" },

  { imageId: "1615529182904-14819c35db37", title: "Wood Panel Wall Feature", category: "wallpaper", tag: "Walls" },
  { imageId: "1594026112284-02bb6f3352fe", title: "Styled Wall Display", category: "wallpaper", tag: "Walls" },

  { imageId: "1441986300917-64674bd600d8", title: "Luxury Villa Interior", category: "villa", tag: "Residential" },
  { imageId: "1600585154340-be6161a56a0c", title: "Luxury Villa Exterior", category: "villa", tag: "Residential" },

  { imageId: "1497366811353-6870744d04b2", title: "Premium Office Interior", category: "office", tag: "Commercial" },
  { imageId: "1497366216548-37526070297c", title: "Modern Office Space", category: "office", tag: "Commercial" },

  { imageId: "1631679706909-1844bbd07221", title: "Modern Kitchen", category: "kitchen", tag: "Residential" },
  { imageId: "1524758631624-e2822e304c36", title: "Contemporary Kitchen", category: "kitchen", tag: "Residential" },
];
