export type FabricSpec = {
  catNo?: string;
  serialNo?: string;
  composition?: string;
  width?: string;
  weight?: string;
  washingInstruction?: string;
  suitableFor?: string;
  feature?: string;
  note?: string;
};

export type Fabric = {
  number: number;
  image: string;
  spec?: FabricSpec;
};

export type Catalog = {
  slug: string;
  name: string;
  catalogNo: string | null;
  description: string;
  cover: string;
  pdf: string;
  secondaryCover?: string;
  backCover?: string;
  fabrics: Fabric[];
};

function buildFabrics(
  path: string,
  count: number,
  specMap: Record<number, FabricSpec> = {},
  sharedSpec?: FabricSpec
): Fabric[] {
  return Array.from({ length: count }, (_, i) => {
    const number = i + 1;
    return {
      number,
      image: `${path}/${String(number).padStart(2, "0")}.jpg`,
      spec: specMap[number] ?? sharedSpec,
    };
  });
}

const rawCatalogs: Omit<Catalog, "pdf">[] = [
  {
    slug: "almas-1010",
    name: "Almas Collection",
    catalogNo: "DC-1010",
    description: "Sheer curtain lining with a soft vertical drape, width 300cm — designed for airy, light-filled interiors.",
    cover: "/catalogs/almas-1010/cover.jpg",
    fabrics: buildFabrics(
      "/catalogs/almas-1010",
      26,
      Object.fromEntries(
        Array.from({ length: 26 }, (_, i) => [
          i + 1,
          {
            catNo: "DC-1010",
            serialNo: String(i + 1),
            composition: "30% Linen, 70% Polyester",
            width: "300cm",
          },
        ])
      )
    ),
  },
  {
    slug: "almas-1012",
    name: "Almas Collection",
    catalogNo: "DC-1012",
    description: "Premium drapery fabric, width 300-330cm, from the Almas line — refined texture for statement living spaces.",
    cover: "/catalogs/almas-1012/cover.jpg",
    backCover: "/catalogs/almas-1012/99.jpg",
    fabrics: buildFabrics(
      "/catalogs/almas-1012",
      23,
      Object.fromEntries(
        Array.from({ length: 23 }, (_, i) => [
          i + 1,
          {
            catNo: "DC-1012",
            serialNo: String(i + 1).padStart(2, "0"),
            composition: "25% Cotton, 75% Polyester",
            width: "330cm",
            suitableFor: "Curtains only",
            washingInstruction: "Dry clean only",
            note: "Slight shade may vary from dye lots & production batches.",
          },
        ])
      )
    ),
  },
  {
    slug: "blackout-fabric",
    name: "Blackout Fabric Collection",
    catalogNo: "DC-801",
    description: "4-pass luxurious blackout fabric — 100% blackout with UV protection, heat insulation, anti-sticking finish and washable care.",
    cover: "/catalogs/blackout-fabric/cover.jpg",
    fabrics: buildFabrics(
      "/catalogs/blackout-fabric",
      40,
      Object.fromEntries(
        Array.from({ length: 40 }, (_, i) => [
          i + 1,
          {
            catNo: "DC-801",
            serialNo: String(i + 1).padStart(2, "0"),
            composition: "100% Polyester",
            width: "280cm",
            suitableFor: "Curtains, wall covering & soft upholstery",
            feature: "100% 4-pass silicon blackout with sound & heat insulation, washable.",
            note: "Colour shades may vary from dye-lot to dye-lot.",
          },
        ])
      )
    ),
  },
  {
    slug: "damask-classic",
    name: "Damask Classic Collection",
    catalogNo: "DC-1004",
    description: "Our signature classic weaves — timeless jacquard and textured patterns for elegant, traditional interiors.",
    cover: "/catalogs/damask-classic/cover.jpg",
    fabrics: buildFabrics(
      "/catalogs/damask-classic",
      37,
      Object.fromEntries(
        Array.from({ length: 37 }, (_, i) => [
          i + 1,
          {
            catNo: "DC-1004",
            serialNo: String(i + 1).padStart(2, "0"),
            composition: "100% Polyester",
            width: "142cm",
            washingInstruction: "Dry clean only",
            suitableFor: "Upholstery & drapery",
            note: "Slight shade may vary from dye lots & production batches.",
          },
        ])
      )
    ),
  },
  {
    slug: "linen-sofa",
    name: "Linen Sofa Collection",
    catalogNo: "DC-1007",
    description: "Water-repellent linen upholstery fabric, width 142cm — durable, soft-touch material for sofas and upholstered furniture.",
    cover: "/catalogs/linen-sofa/cover.jpg",
    secondaryCover: "/catalogs/linen-sofa/detail-1.jpg",
    fabrics: buildFabrics(
      "/catalogs/linen-sofa",
      13,
      Object.fromEntries(
        Array.from({ length: 13 }, (_, i) => [
          i + 1,
          {
            catNo: "DC-1007",
            serialNo: String(i + 1),
            composition: "80% Polyester, 10% Cotton, 10% Linen",
            width: "142cm",
            weight: "340g",
            washingInstruction: "Dry clean only",
            suitableFor: "Upholstery & drapery",
            note: "Slight shade may vary from dye lots & production batches.",
          },
        ])
      )
    ),
  },
  {
    slug: "new-arrival-1008",
    name: "New Arrival Collection",
    catalogNo: "DC-1008",
    description: "Our newest curtain fabric, width 340cm with leadband — fresh weaves and colourways just added to the showroom.",
    cover: "/catalogs/new-arrival-1008/cover.jpg",
    fabrics: buildFabrics("/catalogs/new-arrival-1008", 26, {}, {
      catNo: "DC-1008",
      composition: "30% Cotton, 70% Polyester",
      width: "320cm with leadband",
      suitableFor: "Drapery / curtains",
      washingInstruction: "Dry clean only",
    }),
  },
  {
    slug: "water-repellent-408",
    name: "Water Repellent Fabric Collection",
    catalogNo: "DC-408",
    description: "Home Expressions water-repellent upholstery fabric, width 145cm ±2cm — built for everyday comfort and easy care.",
    cover: "/catalogs/water-repellent-408/cover.jpg",
    fabrics: buildFabrics(
      "/catalogs/water-repellent-408",
      14,
      {},
      {
        catNo: "DC-408",
        width: "145cm ±2cm",
        feature: "Water-repellent finish.",
        suitableFor: "Sofas & upholstered furniture",
      }
    ),
  },
];

export const catalogs: Catalog[] = rawCatalogs.map((c) => ({
  ...c,
  pdf: `/catalogs/${c.slug}/catalog.pdf`,
}));

export function getCatalog(slug: string) {
  return catalogs.find((c) => c.slug === slug);
}
