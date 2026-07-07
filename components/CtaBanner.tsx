import Image from "next/image";
import Link from "next/link";
import { uw } from "@/lib/unsplash";
import { site } from "@/lib/data/site";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="hero-media">
        <Image
          src={uw("1583847268964-b28dc8f51f92", 1600)}
          alt="Luxury interior design consultation"
          fill
          sizes="100vw"
        />
        <div className="hero-overlay" />
      </div>
      <Reveal className="container cta-content">
        <h2>Ready To Transform Your Space?</h2>
        <p>
          Book a free consultation with our design team today and take the first step towards a
          luxury interior.
        </p>
        <div className="hero-actions">
          <Magnetic>
            <Link href="/#contact" className="btn btn-primary">
              Book Consultation
            </Link>
          </Magnetic>
          <Magnetic>
            <a
              href={site.whatsappWithMessage}
              target="_blank"
              rel="noopener"
              className="btn btn-whatsapp"
            >
              <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
