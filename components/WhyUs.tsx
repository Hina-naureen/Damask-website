import Reveal from "./Reveal";
import StaggerReveal from "./StaggerReveal";
import GlowOrb from "./GlowOrb";

const reasons = [
  {
    icon: "fa-solid fa-gem",
    title: "Premium Quality Materials",
    desc: "Only the finest fabrics, woods and finishes make it into our designs.",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "Creative Design Concepts",
    desc: "Original, tailored concepts — never a copy-paste template.",
  },
  {
    icon: "fa-solid fa-ruler-combined",
    title: "Customized Interior Solutions",
    desc: "Every space is planned around how you actually live and work.",
  },
  {
    icon: "fa-solid fa-user-tie",
    title: "Experienced Design Team",
    desc: "Skilled designers and craftsmen with over a decade of expertise.",
  },
  {
    icon: "fa-solid fa-house-chimney",
    title: "Complete Home Transformation",
    desc: "End-to-end execution — from concept sketch to final finishing.",
  },
  {
    icon: "fa-solid fa-crown",
    title: "Modern Luxury Designs",
    desc: "Contemporary aesthetics with a timeless, elegant character.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <GlowOrb color="orange" size={420} style={{ top: "-10%", left: "-8%" }} />
      <GlowOrb color="gold" size={340} style={{ bottom: "-12%", right: "-6%" }} />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="section-head light">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Designed For Distinction</h2>
          <p className="section-desc">
            Every project we undertake is guided by precision, elegance and an obsession with
            detail.
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
