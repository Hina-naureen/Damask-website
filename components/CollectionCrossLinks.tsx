import Link from "next/link";

const allCollections = [
  { href: "/curtains", label: "Curtain Collection" },
  { href: "/sofas", label: "Sofa Collection" },
  { href: "/cushions", label: "Cushion Collection" },
  { href: "/fabrics", label: "Fabric Collection" },
  { href: "/furniture", label: "Furniture Collection" },
];

export default function CollectionCrossLinks({ current }: { current: string }) {
  const others = allCollections.filter((c) => c.href !== current);

  return (
    <section style={{ padding: "60px 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p className="section-desc">Explore our other showroom collections.</p>
        <div className="hero-actions" style={{ justifyContent: "center", flexWrap: "wrap" }}>
          {others.map((c) => (
            <Link href={c.href} className="btn btn-dark btn-sm" key={c.href}>
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
