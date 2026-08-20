import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogIntro from "@/components/CatalogIntro";
import CatalogBookViewer, { type BookPage } from "@/components/CatalogBookViewer";
import FabricGallery from "@/components/FabricGallery";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import MediaShowcase from "@/components/MediaShowcase";
import { catalogs, getCatalog } from "@/lib/data/catalogs";

const BLACKOUT_PHOTOS = Array.from({ length: 9 }, (_, i) => `/blackout-collection/photo-${i + 1}.jpg`);
const BLACKOUT_VIDEOS = Array.from({ length: 5 }, (_, i) => `/blackout-collection/video-${i + 1}.mp4`);

export function generateStaticParams() {
  return catalogs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const catalog = getCatalog(slug);
  if (!catalog) return {};
  return {
    title: `${catalog.name} | Damask Textile Pakistan`,
    description: catalog.description,
  };
}

export default async function CatalogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const catalog = getCatalog(slug);
  if (!catalog) notFound();

  const bookPages: BookPage[] = [
    { type: "cover", src: catalog.cover, label: `${catalog.name} Cover` },
    ...catalog.fabrics.flatMap((f): BookPage[] => {
      const page: BookPage[] = [{ type: "fabric", src: f.image, label: `Fabric ${f.number}` }];
      if (f.spec) {
        page.push({
          type: "detail",
          label: `Fabric ${f.number} Specification`,
          fabricNumber: f.number,
          spec: f.spec,
        });
      }
      return page;
    }),
  ];

  return (
    <main>
      <CatalogIntro catalog={catalog} />

      {catalog.slug === "blackout-fabric" && (
        <MediaShowcase
          id="blackout-showcase"
          eyebrow="Signature Collection"
          title="Blackout Collection"
          description="A closer look at our 100% blackout curtains, heat, sound and light-blocking fabric captured in photos and video."
          cardLabel="Blackout Collection"
          photos={BLACKOUT_PHOTOS}
          videos={BLACKOUT_VIDEOS}
          details={{
            description:
              "4-pass luxurious blackout fabric, 100% blackout with UV protection, heat insulation, anti-sticking finish and washable care.",
            features: [
              "100% 4-pass silicon blackout",
              "UV protection & heat insulation",
              "Sound-dampening, anti-sticking finish",
              "Washable & easy to maintain, 280cm width, 100% Polyester",
            ],
            applications: [
              "Curtains & drapery",
              "Wall covering",
              "Soft upholstery",
              "Bedrooms, home theatres & hotels",
            ],
          }}
        />
      )}

      {catalog.fabrics.length > 0 && (
        <>
          <section className="portfolio">
            <div className="container">
              <Reveal className="section-head">
                <p className="eyebrow">Browse Like A Book</p>
                <h2>Flip Through The Catalog</h2>
                <p className="section-desc">
                  A realistic page-turning preview, each fabric with a written detail sheet opens
                  facing its matching detail page, just like the printed catalog.
                </p>
              </Reveal>
              <CatalogBookViewer pages={bookPages} name={catalog.name} />
            </div>
          </section>

          <section className="portfolio">
            <div className="container">
              <Reveal className="section-head">
                <p className="eyebrow">Full Swatch Library</p>
                <h2>{catalog.fabrics.length} Fabrics In This Collection</h2>
                <p className="section-desc">
                  Click any fabric to view its detail sheet up close. Use the arrows to move
                  through the collection.
                </p>
              </Reveal>
              <FabricGallery fabrics={catalog.fabrics} catalogName={catalog.name} />
            </div>
          </section>
        </>
      )}

      <CtaBanner />
    </main>
  );
}
