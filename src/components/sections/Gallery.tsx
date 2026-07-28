"use client";

import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { galleryImages } from "@/data/site";

export default function Gallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(galleryImages.map((g) => g.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Clinic Gallery"
            title="A closer look inside Ashford Wellness Clinic."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`focus-ring rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${active === cat
                    ? "border-pine bg-pine text-ivory"
                    : "border-line text-ink/60 hover:border-pine/40"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 [grid-auto-flow:dense]">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(i)}
              className={`focus-ring group relative overflow-hidden rounded-card ${i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
            >
              <SmartImage
                src={img.src}
                alt={img.alt}
                className="h-full w-full"
                imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="focus-ring absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <Icon icon="solar:close-circle-bold" className="text-2xl" />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <SmartImage
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="w-full aspect-[4/3] rounded-card"
              imgClassName="h-full w-full object-cover rounded-card"
            />
            <p className="mt-4 text-center text-sm text-ivory/80">{filtered[lightbox].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
