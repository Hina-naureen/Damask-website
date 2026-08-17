import Image from "next/image";
import Link from "next/link";
import type { Catalog } from "@/lib/data/catalogs";
import StaggerReveal from "./StaggerReveal";

export default function CatalogGrid({ catalogs }: { catalogs: Catalog[] }) {
  return (
    <StaggerReveal className="collections-grid catalog-grid" stagger={0.1}>
      {catalogs.map((c) => (
        <Link href={`/catalogs/${c.slug}`} className="collection-card" key={c.slug}>
          <div className="collection-media">
            <Image
              src={c.cover}
              alt={`${c.name} catalog cover`}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 20vw"
            />
            <div className="collection-overlay" />
          </div>
          <div className="collection-body">
            <h3>{c.name}</h3>
            <p>{c.catalogNo ? `Cat No. ${c.catalogNo}` : `${c.fabrics.length} fabric swatches`}</p>
          </div>
          <span className="collection-arrow">
            <i className="fa-solid fa-arrow-right" />
          </span>
        </Link>
      ))}
    </StaggerReveal>
  );
}
