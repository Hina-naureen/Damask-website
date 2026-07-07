import Link from "next/link";
import { site, collectionLinks } from "@/lib/data/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <Link href="/" className="brand">
            <Logo size={46} />
            <span className="brand-text">
              <span className="brand-name">{site.brandMain}</span>
              <span className="brand-sub">{site.brandSub}</span>
            </span>
          </Link>
          <p>
            Premium interior design solutions for homes, offices and luxury spaces — crafted with
            elegance in Karachi, Pakistan.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p" />
            </a>
            <a href={site.whatsapp} aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About Us</Link>
            </li>
            <li>
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Collections</h4>
          <ul>
            {collectionLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <i className="fa-solid fa-location-dot" /> {site.address}
            </li>
            <li>
              <i className="fa-solid fa-phone" />{" "}
              <a href={`tel:${site.phonePrimaryTel}`}>{site.phonePrimary}</a>
            </li>
            <li>
              <i className="fa-solid fa-phone" />{" "}
              <a href={`tel:${site.phoneSecondaryTel}`}>{site.phoneSecondary}</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope" /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
