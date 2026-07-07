"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, collectionLinks, site } from "@/lib/data/site";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const pathname = usePathname();
  const onCollectionPage = collectionLinks.some((c) => c.href === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="brand">
          <Logo size={46} />
          <span className="brand-text">
            <span className="brand-name">{site.brandMain}</span>
            <span className="brand-sub">{site.brandSub}</span>
          </span>
        </Link>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          <ul>
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li
              className="nav-dropdown"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <button
                type="button"
                className={`nav-link nav-dropdown-toggle ${onCollectionPage ? "active" : ""}`}
                onClick={() => setCollectionsOpen((v) => !v)}
                aria-expanded={collectionsOpen}
              >
                Collections <i className="fa-solid fa-chevron-down" />
              </button>
              <ul className={`nav-dropdown-menu ${collectionsOpen ? "open" : ""}`}>
                {collectionLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={pathname === link.href ? "active" : ""}
                      onClick={() => {
                        setOpen(false);
                        setCollectionsOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.slice(3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href={`tel:${site.phoneSecondaryTel}`} className="header-phone">
            <i className="fa-solid fa-phone" /> {site.phoneSecondary}
          </a>
          <Link href="/#contact" className="btn btn-primary btn-sm">
            Book Consultation
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
