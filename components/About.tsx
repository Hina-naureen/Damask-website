import Image from "next/image";
import Link from "next/link";
import { uw } from "@/lib/unsplash";
import Reveal from "./Reveal";

const highlights = [
  "Premium Wholesale Fabrics",
  "Trusted By Leading Showrooms",
  "Consistent Quality & Supply",
  "Nationwide Reach Across Pakistan",
  "Customer Satisfaction Focused",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <Reveal className="about-media">
          <Image
            src={uw("1615471618985-97108e2ba478", 1000)}
            alt="Elegant living room with sheer white curtains and premium interior styling, representing Damask Textile Pakistan's fabric quality"
            width={1000}
            height={1250}
          />
          <div className="about-badge">
            <i className="fa-solid fa-award" />
            <span>
              12+ Years
              <br />
              of Craftsmanship
            </span>
          </div>
        </Reveal>

        <Reveal className="about-content" delay={0.1}>
          <p className="eyebrow">About Damask Textile Pakistan</p>
          <h2>A Wholesale Textile Partner Built On Trust</h2>
          <p className="lead">
            Led by Azeem, Damask Textile Pakistan is a premium wholesale fabric supplier, equipping
            leading showrooms, interior shops and professional buyers across Pakistan with
            textiles built for curtains, upholstery, drapery and luxury home furnishing.
          </p>
          <p>
            We don&apos;t sell one piece at a time — we supply the shops and showrooms that do.
            Every collection we carry is chosen for consistent quality, dependable stock and a
            finish that holds up to the standards of established retailers and interior
            professionals, so the businesses we serve can serve their own customers with
            confidence.
          </p>
          <ul className="about-list">
            {highlights.map((item) => (
              <li key={item}>
                <i className="fa-solid fa-circle-check" /> {item}
              </li>
            ))}
          </ul>
          <Link href="/#contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
