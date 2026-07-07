"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/data/testimonials";
import Reveal from "./Reveal";
import GlowOrb from "./GlowOrb";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="testimonials" id="testimonials" style={{ position: "relative", overflow: "hidden" }}>
      <GlowOrb color="orange" size={340} style={{ bottom: "-15%", left: "-6%" }} />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="section-head">
          <p className="eyebrow">Client Stories</p>
          <h2>What Our Clients Say</h2>
        </Reveal>

        <Reveal className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="stars">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <h4>{t.name}</h4>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((t, i) => (
              <span
                key={t.name}
                className={i === current ? "active" : ""}
                onClick={() => {
                  setCurrent(i);
                  resetTimer();
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
