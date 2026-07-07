"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years of Excellence", value: 12 },
  { label: "Projects Completed", value: 450 },
  { label: "Happy Clients", value: 380 },
  { label: "Expert Designers", value: 20 },
];

export default function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const nums = el.querySelectorAll<HTMLSpanElement>(".stat-num");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(el.children),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );

      nums.forEach((node) => {
        const target = Number(node.dataset.count || 0);
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            node.textContent = Math.floor(counter.val).toString();
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats" id="stats">
      <div className="container stats-grid" ref={gridRef}>
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <span className="stat-num" data-count={s.value}>
              0
            </span>
            <span className="stat-plus">+</span>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
