"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tl = gsap.timeline({
      onComplete: () => setVisible(false),
    });

    tl.fromTo(".loader-icon", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" })
      .to(".loader-icon", { scale: 1.08, duration: 0.4, repeat: 1, yoyo: true, ease: "sine.inOut" })
      .to(el, { opacity: 0, duration: 0.5, delay: 0.15, ease: "power2.inOut" });

    return () => {
      tl.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory"
      aria-hidden="true"
    >
      <div className="loader-icon flex h-16 w-16 items-center justify-center rounded-full bg-pine text-ivory">
        <Icon icon="solar:pulse-2-bold" className="text-3xl" />
      </div>
    </div>
  );
}
