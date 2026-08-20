import Reveal from "./Reveal";
import StaggerReveal from "./StaggerReveal";
import GlowOrb from "./GlowOrb";

const reasons = [
  {
    icon: "fa-solid fa-gem",
    title: "Premium Quality Fabrics",
    desc: "Every roll is sourced and inspected for consistent quality, colour and finish.",
  },
  {
    icon: "fa-solid fa-truck-fast",
    title: "Wholesale Supply Across Pakistan",
    desc: "Reliable bulk supply to retailers and businesses nationwide.",
  },
  {
    icon: "fa-solid fa-building-user",
    title: "Trusted By Interior Businesses",
    desc: "Furniture stores and interior designers rely on us for stock they can count on.",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Wide Range Of Textile Collections",
    desc: "Curtains, upholstery, blackout, outdoor and specialty fabrics, all under one supplier.",
  },
  {
    icon: "fa-solid fa-user-tie",
    title: "Professional Fabric Solutions",
    desc: "Dedicated guidance on composition, width and suitability for every project.",
  },
  {
    icon: "fa-solid fa-crown",
    title: "Modern Luxury Designs",
    desc: "Contemporary weaves and finishes with a timeless, elegant character.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <GlowOrb color="orange" size={420} style={{ top: "-10%", left: "-8%" }} />
      <GlowOrb color="gold" size={340} style={{ bottom: "-12%", right: "-6%" }} />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="section-head light">
          <p className="eyebrow">Why Choose Damask Textile Pakistan</p>
          <h2>Pakistan&rsquo;s Trusted Wholesale Textile Supplier</h2>
          <p className="section-desc">
            Supplying premium interior fabrics to furniture stores, interior designers
            and businesses across Pakistan.
          </p>
        </Reveal>
        <StaggerReveal className="why-grid">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <i className={r.icon} />
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
