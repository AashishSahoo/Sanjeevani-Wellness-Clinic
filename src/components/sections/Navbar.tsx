"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(22,35,31,0.08)]" : "bg-transparent"
        }`}
    >
      <nav className="container-x flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2.5 focus-ring">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine text-ivory">
            <Icon icon="solar:pulse-2-bold" className="text-lg" />
          </span>
          <span className="font-display text-lg tracking-tight text-ink">
            {site.clinicName}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`focus-ring relative text-sm font-medium transition-colors ${active === link.href ? "text-pine" : "text-ink/70 hover:text-ink"
                  }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-copper" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          {/* <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="focus-ring flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-ink"
          >
            <Icon icon="solar:phone-calling-bold-duotone" className="text-lg text-copper" />
            {site.phone}
          </a> */}
          <a
            href="#contact"
            className="focus-ring rounded-card bg-pine px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-pine-dark"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="focus-ring lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon icon={open ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"} className="text-xl" />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-line">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`focus-ring block rounded-card px-3 py-2.5 text-sm font-medium ${active === link.href ? "bg-sage text-pine" : "text-ink/80"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="focus-ring block rounded-card bg-pine px-4 py-3 text-center text-sm font-semibold text-ivory"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
