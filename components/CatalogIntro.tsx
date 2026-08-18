import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import type { Catalog } from "@/lib/data/catalogs";

export default function CatalogIntro({ catalog }: { catalog: Catalog }) {
  return (
    <section className="catalog-intro-section">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link> <span>/</span> <Link href="/catalogs">Catalogs</Link>{" "}
          <span>/</span> <span>{catalog.name}</span>
        </div>

        <div className="about-inner catalog-intro">
          <Reveal className="about-media catalog-cover-media">
            <Image
              src={catalog.cover}
              alt={`${catalog.name} catalog cover`}
              width={600}
              height={750}
            />
            {catalog.catalogNo && (
              <div className="about-badge">
                <i className="fa-solid fa-tag" />
                <span>Cat No. {catalog.catalogNo}</span>
              </div>
            )}
          </Reveal>

          <Reveal className="about-content" delay={0.1}>
            <p className="eyebrow">{catalog.catalogNo ? `Cat No. ${catalog.catalogNo}` : "Fabric Catalog"}</p>
            <h1>{catalog.name}</h1>
            <p className="lead">{catalog.description}</p>
            {catalog.fabrics.length > 0 ? (
              <p>{catalog.fabrics.length} fabrics in this collection, professionally photographed for easy reference.</p>
            ) : (
              <p>Full fabric range available in our downloadable catalog — contact us for physical samples.</p>
            )}
            <div className="hero-actions">
              <Link href="/#contact" className="btn btn-primary">
                Book Consultation
              </Link>
              <a href={catalog.pdf} download className="btn btn-solid">
                <i className="fa-solid fa-file-arrow-down" /> Download Catalog PDF
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
