import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealStagger from "@/components/ui/RevealStagger";
import { facilities } from "@/data/site";

export default function Facilities() {
  return (
    <section id="facilities" className="bg-pine py-24 lg:py-32 text-ivory">
      <div className="container-x">
        <SectionHeading
          eyebrow="Clinic Facilities"
          title="A calm, well-equipped space built around patient comfort."
          light
        />

        <RevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f) => (
            <div
              key={f.title}
              className="group rounded-card border border-ivory/15 p-6 transition-all duration-300 hover:bg-ivory hover:border-ivory"
            >
              <Icon
                icon={f.icon}
                className="text-3xl text-gold transition-colors duration-300 group-hover:text-copper"
              />
              <h3 className="mt-5 font-display text-lg text-ivory transition-colors duration-300 group-hover:text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sage transition-colors duration-300 group-hover:text-ink/65">
                {f.description}
              </p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
