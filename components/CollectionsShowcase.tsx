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
    image: "/curtain-collection/photo-1.jpg",
    overlayLight: false,
  },
  {
    href: "/sofas",
    title: "Sofa Collection",
    desc: "Chesterfield, sectional, leather & custom",
    image: "/luxury-sofa/photo-4.jpg",
    overlayLight: false,
  },
  {
    href: "/outdoor-fabric",
    title: "Outdoor Fabric Collection",
    desc: "Weather-resistant, fade-proof outdoor fabric",
    image: "/outdoor-fabric/photo-1.jpg",
    overlayLight: true,
  },
  {
    href: "/fabrics",
    title: "Fabric Collection",
    desc: "Velvet, leather, linen & jacquard damask",
    image: uw("1771098206750-6be5aef4f503", 800),
    overlayLight: false,
  },
  {
    href: "/catalogs/blackout-fabric",
    title: "Blackout Collection",
    desc: "100% blackout curtains with heat & sound insulation",
    image: "/blackout-collection/photo-9.jpg",
    overlayLight: true,
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
            Five wholesale-ready fabric collections, each styled and photographed to showroom
            standard.
          </p>
        </Reveal>

        <StaggerReveal className="collections-grid" stagger={0.1}>
          {collections.map((c) => (
            <Link href={c.href} className="collection-card" key={c.href}>
              <div className="collection-media">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 20vw"
                />
                <div className={`collection-overlay${c.overlayLight ? " collection-overlay-light" : ""}`} />
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
