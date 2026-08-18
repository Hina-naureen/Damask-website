import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import StaggerReveal from "./StaggerReveal";

const collections = [
  {
    href: "/curtains",
    number: "01",
    tag: "Drapery",
    title: "Curtain Collection",
    desc: "Velvet, silk, sheer & designer drapery styled to showroom standard.",
    image: "/curtain-collection/photo-1.jpg",
    overlayLight: false,
    featured: true,
  },
  {
    href: "/sofas",
    number: "02",
    tag: "Upholstery",
    title: "Sofa Collection",
    desc: "Chesterfield, sectional, leather & custom upholstery fabric.",
    image: "/luxury-sofa/photo-4.jpg",
    overlayLight: false,
  },
  {
    href: "/outdoor-fabric",
    number: "03",
    tag: "Outdoor",
    title: "Outdoor Fabric Collection",
    desc: "Weather-resistant, fade-proof fabric for al fresco living.",
    image: "/outdoor-fabric/photo-13.jpg",
    overlayLight: false,
  },
  {
    href: "/fabrics",
    number: "04",
    tag: "Fabric",
    title: "Fabric Collection",
    desc: "Velvet, leather, linen & jacquard damask in one library.",
    image: "/outdoor-fabric/photo-1.jpg",
    overlayLight: false,
  },
  {
    href: "/catalogs/blackout-fabric",
    number: "05",
    tag: "Blackout",
    title: "Blackout Collection",
    desc: "100% blackout curtains with heat & sound insulation.",
    image: "/blackout-collection/photo-9.jpg",
    overlayLight: true,
  },
];

export default function CollectionsShowcase() {
  return (
    <section className="collections-showcase" id="collections">
      <div className="container">
        <Reveal className="section-head collections-head">
          <p className="eyebrow">The Showroom</p>
          <h2>Explore Our Collections</h2>
          <p className="section-desc">
            Five wholesale-ready fabric collections, each styled and photographed to showroom
            standard — curated for showrooms, interior shops and design professionals.
          </p>
        </Reveal>

        <StaggerReveal className="collections-grid" stagger={0.1}>
          {collections.map((c) => (
            <Link
              href={c.href}
              className={`collection-card${c.featured ? " collection-card-featured" : ""}`}
              key={c.href}
            >
              <div className="collection-media">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes={
                    c.featured
                      ? "(max-width: 700px) 100vw, (max-width: 1080px) 100vw, 50vw"
                      : "(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 25vw"
                  }
                />
                <div
                  className={`collection-overlay${c.overlayLight ? " collection-overlay-light" : ""}`}
                />
              </div>

              <span className="collection-number">{c.number}</span>

              <div className="collection-body">
                <p className="collection-tag">{c.tag}</p>
                <h3>{c.title}</h3>
                <p className="collection-desc">{c.desc}</p>
                <span className="collection-link">
                  Explore Collection
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </div>
            </Link>
          ))}
        </StaggerReveal>

        <Reveal className="collections-foot" delay={0.15}>
          <p>Can&apos;t find the exact fabric you need?</p>
          <Link href="/#contact" className="btn btn-primary">
            Request a Custom Swatch
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
