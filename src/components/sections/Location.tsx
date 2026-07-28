import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

const landmarks = [
  "3 min walk from Meridian Square MAX Station",
  "Adjacent to Meridian Avenue Parking Garage",
  "Across from Portland Community Library — Meridian Branch",
];

export default function Location() {
  return (
    <section id="location" className="bg-ivory py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Location" title="Find us in the heart of the city." />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-card border border-line shadow-soft h-[380px] lg:h-full">
              <iframe
                src={site.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic location map"
                className="h-full w-full grayscale-[15%]"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="h-full rounded-card bg-pine p-8 text-ivory flex flex-col">
              <Icon icon="solar:map-point-bold-duotone" className="text-3xl text-gold" />
              <h3 className="mt-4 font-display text-xl">{site.clinicName}</h3>
              <p className="mt-2 text-sm text-sage leading-relaxed">{site.address}</p>

              <div className="mt-6 space-y-3">
                {landmarks.map((l) => (
                  <div key={l} className="flex items-start gap-2.5 text-sm text-sage">
                    <Icon icon="solar:signpost-bold-duotone" className="mt-0.5 text-base text-gold shrink-0" />
                    {l}
                  </div>
                ))}
              </div>

              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-ivory hover:text-gold transition-colors"
              >
                Get Directions
                <Icon icon="solar:arrow-right-up-linear" className="text-base" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
