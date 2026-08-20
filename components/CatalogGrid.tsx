import Image from "next/image";
import Link from "next/link";
import type { Catalog } from "@/lib/data/catalogs";
import StaggerReveal from "./StaggerReveal";

export default function CatalogGrid({ catalogs }: { catalogs: Catalog[] }) {
  return (
    <StaggerReveal className="catalog-showcase-grid" stagger={0.1}>
      {catalogs.map((c) => (
        <Link href={`/catalogs/${c.slug}`} className="catalog-card" key={c.slug}>
          <div className="catalog-card-media">
            <Image
              src={c.cover}
              alt={`${c.name} catalog cover`}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
            />
            {c.catalogNo && <span className="catalog-card-number">{c.catalogNo}</span>}
          </div>
          <div className="catalog-card-body">
            <h3 className="catalog-card-name">{c.name}</h3>
            <p className="catalog-card-meta">
              {c.catalogNo ? `Cat No. ${c.catalogNo}` : `${c.fabrics.length} Fabric Swatches`}
            </p>
            <span className="catalog-card-link">
              View Collection <i className="fa-solid fa-arrow-right" />
            </span>
          </div>
        </Link>
      ))}
    </StaggerReveal>
  );
}
