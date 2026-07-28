"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import VitalsLine from "@/components/ui/VitalsLine";
import SmartImage from "@/components/ui/SmartImage";
import { doctor, site, stats } from "@/data/site";

export default function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.35"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        )
        .fromTo(
          ".hero-portrait",
          { opacity: 0, scale: 1.04, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          "-=0.9"
        )
        .fromTo(
          ".hero-badge",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={scope}
      className="relative overflow-hidden bg-ivory pt-32 pb-16 lg:pt-40"
    >
      {/* Ambient background texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-sage/60 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-[360px] w-[360px] rounded-full bg-copper/10 blur-3xl" />
      </div>

      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 xl:col-span-6">
          <span className="hero-eyebrow eyebrow inline-flex items-center gap-2 text-copper">
            <span className="h-px w-6 bg-copper" />
            {site.tagline}
          </span>

          <h1 className="mt-5 font-display text-[2.75rem] sm:text-6xl leading-[1.05] tracking-tight text-ink">
            <span className="hero-line block">Unhurried care,</span>
            <span className="hero-line block italic text-pine">from a doctor</span>
            <span className="hero-line block">who listens first.</span>
          </h1>

          <p className="hero-sub mt-6 max-w-md text-base leading-relaxed text-ink/70">
            {doctor.name.split(",")[0]} leads {site.clinicName} with{" "}
            {doctor.experienceYears}+ years of internal medicine experience —
            combining rigorous diagnostics with genuine, patient-first
            conversations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="hero-cta">
              <Button href="#contact" icon="solar:calendar-add-bold">
                Book Appointment
              </Button>
            </span>
            <span className="hero-cta">
              <Button href="#contact" variant="ghost" icon="solar:phone-bold">
                Contact Us
              </Button>
            </span>
            <span className="hero-cta">
              <Button href="#about" variant="ghost" icon="solar:arrow-right-bold" className="border-transparent underline underline-offset-4 hover:bg-transparent hover:text-orange-500 px-0">
                Learn More
              </Button>
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-6 relative">
          <div className="hero-portrait relative mx-auto max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-pine/15" />
            <SmartImage
              src={doctor.portrait}
              alt={`Portrait of ${doctor.name}`}
              className="aspect-[4/5] w-full rounded-[1.75rem] shadow-soft"
              imgClassName="h-full w-full object-cover rounded-[1.75rem]"
            />

            <div className="hero-badge absolute -left-6 top-8 hidden sm:flex items-center gap-3 rounded-card bg-white/95 backdrop-blur px-4 py-3 shadow-soft">
              <Icon icon="solar:verified-check-bold" className="text-2xl text-pine" />
              <div>
                <p className="text-xs font-semibold text-ink">Board Certified</p>
                <p className="text-[11px] text-ink/60">Internal Medicine</p>
              </div>
            </div>

            <div className="hero-badge absolute -right-4 bottom-10 hidden sm:flex items-center gap-3 rounded-card bg-pine px-4 py-3 shadow-soft">
              <Icon icon="solar:star-bold" className="text-xl text-gold" />
              <div>
                <p className="text-xs font-semibold text-ivory">4.9 / 5 Rating</p>
                <p className="text-[11px] text-sage">1,200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature vitals strip */}
      <div className="container-x mt-16">
        <div className="hero-stat text-copper/50">
          <VitalsLine />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-2">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat border-l border-line pl-4">
              <p className="font-display text-3xl sm:text-4xl text-pine">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs sm:text-sm text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
