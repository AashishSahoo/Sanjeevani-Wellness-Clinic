"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  itemSelector?: string;
  stagger?: number;
};

export default function RevealStagger({
  children,
  className = "",
  itemSelector = ":scope > *",
  stagger = 0.1,
}: RevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(itemSelector);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [itemSelector, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
