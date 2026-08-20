import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const highlights = [
  "Premium Wholesale Fabrics",
  "Trusted By Leading Retailers",
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
            src="/about/luxury-living-room.jpg"
            alt="Grand luxury living room with tall floor-to-ceiling curtains, a crystal chandelier and premium upholstered seating, representing Damask Textile Pakistan's fabric quality"
            width={900}
            height={1600}
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
          <h2>Our Story</h2>
          <p className="lead">
            Damask is a luxury textile house specialising in premium upholstery and drapery
            fabrics for refined residential and commercial interiors.
          </p>
          <p>
            With an extensive collection of carefully curated fabrics, we bring together
            timeless patterns, sophisticated textures and contemporary designs to complement a
            wide range of interior styles. From statement upholstery and elegant curtains to
            subtle layers of texture, our collections are designed to elevate every space.
          </p>
          <p>
            Our fabrics are sourced and woven through world class textile mills, selected for
            their exceptional craftsmanship, consistency and quality. Every collection reflects
            our commitment to bringing designers, architects and discerning homeowners fabrics
            that are as beautiful as they are enduring.
          </p>
          <p>
            With our headquarters in Dubai and distribution across Pakistan, Damask connects
            global textile standards with the needs of the modern interior.
          </p>
          <p>
            Whether inspired by the richness of classic damasks, the understated beauty of
            contemporary textures or the timeless appeal of refined neutrals, our fabrics are
            created to become an integral part of beautifully considered spaces.
          </p>
          <p>Damask The Art of Refined Interiors.</p>
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
