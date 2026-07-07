"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TiltCard({
  children,
  className,
  onClick,
  max = 8,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rotateXTo = gsap.quickTo(el, "rotateX", { duration: 0.5, ease: "power3.out" });
    const rotateYTo = gsap.quickTo(el, "rotateY", { duration: 0.5, ease: "power3.out" });

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateYTo(px * max * 2);
      rotateXTo(-py * max * 2);
    }

    function onLeave() {
      rotateXTo(0);
      rotateYTo(0);
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return (
    <div ref={ref} className={className} onClick={onClick} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}
