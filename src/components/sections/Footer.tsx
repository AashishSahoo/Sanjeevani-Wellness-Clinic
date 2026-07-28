import { Icon } from "@iconify/react";
import { navLinks, services, site, socialLinks } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-copper text-ivory">
                <Icon icon="solar:pulse-2-bold" className="text-lg" />
              </span>
              <span className="font-display text-lg">{site.clinicName}</span>
            </a>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed max-w-xs">
              Personalized internal medicine and preventive care, led by Dr.
              Eleanor Ashford — where every patient is given the time they
              deserve.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 transition-colors hover:bg-ivory hover:text-ink"
                >
                  <Icon icon={s.icon} className="text-base" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-ivory/40">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="focus-ring text-sm text-ivory/70 hover:text-ivory transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/40">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="focus-ring text-sm text-ivory/70 hover:text-ivory transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/40">Contact</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-ivory/70">
                <Icon icon="solar:map-point-linear" className="mt-0.5 text-copper shrink-0" />
                {site.address}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ivory/70">
                <Icon icon="solar:phone-linear" className="text-copper shrink-0" />
                {site.phone}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ivory/70">
                <Icon icon="solar:letter-linear" className="text-copper shrink-0" />
                {site.email}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>
            &copy; {year} {site.clinicName}. All rights reserved.
          </p>
          <p>Designed for patients who deserve unhurried care.</p>
        </div>
      </div>
    </footer>
  );
}
