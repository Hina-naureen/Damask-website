"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "./Logo";
import { site } from "@/lib/data/site";

export default function Loader() {
  const [mounted, setMounted] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const timer = window.setTimeout(() => {
      gsap.to(el, {
        opacity: 0,
        scale: 1.06,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => setMounted(false),
      });
    }, 750);

    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="page-loader" ref={ref}>
      <Logo size={64} />
      <div className="loader-bar">
        <span />
      </div>
      <p className="loader-text">{site.name}</p>
    </div>
  );
}
