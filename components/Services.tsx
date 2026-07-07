import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { uw } from "@/lib/unsplash";
import Reveal from "./Reveal";
import StaggerReveal from "./StaggerReveal";
import GlowOrb from "./GlowOrb";

export default function Services() {
  return (
    <section className="services" id="services" style={{ position: "relative", overflow: "hidden" }}>
      <GlowOrb color="orange" size={380} style={{ top: "-10%", right: "-8%" }} />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="section-head">
          <p className="eyebrow">What We Offer</p>
          <h2>Our Interior Design Services</h2>
          <p className="section-desc">
            From concept to completion, we craft bespoke interiors across every category of home
            and commercial design.
          </p>
        </Reveal>

        <StaggerReveal className="services-grid">
          {services.map((service) => {
            const Card = (
              <>
                <div className="service-media">
                  <Image
                    src={uw(service.imageId, 800)}
                    alt={service.title}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  />
                </div>
                <div className="service-body">
                  <span className="service-icon">
                    <i className={service.icon} />
                  </span>
                  <h3>{service.title}</h3>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </>
            );

            return service.href ? (
              <Link href={service.href} className="service-card" key={service.slug}>
                {Card}
              </Link>
            ) : (
              <div className="service-card" key={service.slug}>
                {Card}
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
