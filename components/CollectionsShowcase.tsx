import Image from "next/image";
import Link from "next/link";
import { uw } from "@/lib/unsplash";
import Reveal from "./Reveal";
import StaggerReveal from "./StaggerReveal";

const collections = [
  {
    href: "/curtains",
    title: "Curtain Collection",
    desc: "Velvet, silk, sheer & designer drapery",
    imageId: "1554295405-abb8fd54f153",
  },
  {
    href: "/sofas",
    title: "Sofa Collection",
    desc: "Chesterfield, sectional, leather & custom",
    imageId: "1617806118233-18e1de247200",
  },
  {
    href: "/cushions",
    title: "Cushion Collection",
    desc: "Velvet, printed, knit & custom covers",
    imageId: "1531592762598-58a792d73aed",
  },
  {
    href: "/fabrics",
    title: "Fabric Collection",
    desc: "Velvet, leather, linen & jacquard damask",
    imageId: "1771098206750-6be5aef4f503",
  },
  {
    href: "/furniture",
    title: "Furniture Collection",
    desc: "Tables, cabinets, lighting & ceilings",
    imageId: "1604014237800-1c9102c219da",
  },
];

export default function CollectionsShowcase() {
  return (
    <section className="collections-showcase" id="collections">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">The Showroom</p>
          <h2>Explore Our Collections</h2>
          <p className="section-desc">
            Five curated catalogues of premium interior products, each styled and photographed to
            showroom standard.
          </p>
        </Reveal>

        <StaggerReveal className="collections-grid" stagger={0.1}>
          {collections.map((c) => (
            <Link href={c.href} className="collection-card" key={c.href}>
              <div className="collection-media">
                <Image
                  src={uw(c.imageId, 800)}
                  alt={c.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 20vw"
                />
                <div className="collection-overlay" />
              </div>
              <div className="collection-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="collection-arrow">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </div>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
