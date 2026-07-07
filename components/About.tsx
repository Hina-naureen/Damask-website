import Image from "next/image";
import Link from "next/link";
import { uw } from "@/lib/unsplash";
import Reveal from "./Reveal";

const highlights = [
  "Quality Craftsmanship",
  "Customized Solutions",
  "Attention to Detail",
  "Luxury Finishing",
  "Customer Satisfaction",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <Reveal className="about-media">
          <Image
            src={uw("1753791913941-efa7de4e1b5c", 1000)}
            alt="Luxury living room with orange velvet cushions and sheer curtains designed by Damask Textile Pakistan"
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
          <h2>Where Elegance Meets Function</h2>
          <p className="lead">
            Damask Textile Pakistan creates elegant, functional, and personalized interiors by
            combining creativity, premium materials, and modern design concepts.
          </p>
          <p>
            Built on decades of textile craftsmanship, our interior design studio brings deep
            fabric expertise together with modern design thinking to transform homes, offices and
            luxury spaces across Karachi into refined, timeless environments.
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
