"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    timer.current = setInterval(next, 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [next]);

  const pause = () => timer.current && clearInterval(timer.current);
  const resume = () => {
    pause();
    timer.current = setInterval(next, 6000);
  };

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-pine py-20 sm:py-24 lg:py-32 text-ivory">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-copper/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Patient Testimonials"
          title="What patients say after their first visit."
          light
          align="center"
        />

        <div
          className="mt-10 sm:mt-14 mx-auto max-w-2xl"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Card + side arrows */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => {
                prev();
                resume();
              }}
              className="focus-ring hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-colors hover:border-ivory hover:text-ivory"
              aria-label="Previous testimonial"
            >
              <Icon icon="solar:arrow-left-linear" className="text-base" />
            </button>

            <div className="relative flex-1 rounded-card bg-ivory/[0.06] border border-ivory/15 px-6 py-8 sm:px-10 sm:py-10 text-center backdrop-blur-sm">
              <Icon
                icon="solar:quote-up-bold"
                className="mx-auto text-2xl text-gold/70"
              />

              <div className="mt-3 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    icon="solar:star-bold"
                    className={`text-sm ${i < t.rating ? "text-gold" : "text-ivory/20"}`}
                  />
                ))}
              </div>

              <p className="mt-5 font-display text-base sm:text-xl leading-relaxed sm:leading-snug italic text-ivory/95">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <SmartImage
                  src={t.image}
                  alt={t.name}
                  className="h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden shrink-0 ring-2 ring-ivory/20"
                  imgClassName="h-full w-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold leading-tight">{t.name}</p>
                  <p className="text-xs text-sage leading-tight">{t.role}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                next();
                resume();
              }}
              className="focus-ring hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-colors hover:border-ivory hover:text-ivory"
              aria-label="Next testimonial"
            >
              <Icon icon="solar:arrow-right-linear" className="text-base" />
            </button>
          </div>

          {/* Dots + mobile arrows */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => {
                prev();
                resume();
              }}
              className="focus-ring flex sm:hidden h-8 w-8 items-center justify-center rounded-full border border-ivory/20 text-ivory/70"
              aria-label="Previous testimonial"
            >
              <Icon icon="solar:arrow-left-linear" className="text-sm" />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    resume();
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-gold" : "w-1.5 bg-ivory/30"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                next();
                resume();
              }}
              className="focus-ring flex sm:hidden h-8 w-8 items-center justify-center rounded-full border border-ivory/20 text-ivory/70"
              aria-label="Next testimonial"
            >
              <Icon icon="solar:arrow-right-linear" className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}