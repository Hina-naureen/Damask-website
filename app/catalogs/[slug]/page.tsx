import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogIntro from "@/components/CatalogIntro";
import CatalogBookViewer, { type BookPage } from "@/components/CatalogBookViewer";
import FabricGallery from "@/components/FabricGallery";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { catalogs, getCatalog } from "@/lib/data/catalogs";

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
    { type: "cover", src: catalog.cover, label: `${catalog.name} — Cover` },
    ...catalog.fabrics.flatMap((f): BookPage[] => {
      const page: BookPage[] = [{ type: "fabric", src: f.image, label: `Fabric ${f.number}` }];
      if (f.spec) {
        page.push({
          type: "detail",
          label: `Fabric ${f.number} — Specification`,
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

      <section className="portfolio">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Browse Like A Book</p>
            <h2>Flip Through The Catalog</h2>
            <p className="section-desc">
              A realistic page-turning preview — each fabric with a written detail sheet opens
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
              Click any fabric to view its detail sheet up close — use the arrows to move through
              the collection.
            </p>
          </Reveal>
          <FabricGallery fabrics={catalog.fabrics} catalogName={catalog.name} />
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
