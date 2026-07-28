import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealStagger from "@/components/ui/RevealStagger";
import { specializations } from "@/data/site";

export default function Specializations() {
  return (
    <section id="specializations" className="bg-ivory py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Specializations"
            title="Focused expertise across the health areas that matter most."
          />
        </div>

        <RevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec) => (
            <div
              key={spec.title}
              className="group relative overflow-hidden rounded-card border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-pine/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-ivory">
                <Icon icon={spec.icon} className="text-3xl" />
              </div>
              <h3 className="mt-6 font-display text-xl text-ink">{spec.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{spec.description}</p>
              <span className="absolute right-6 top-7 font-mono text-[11px] text-ink/25">
                {String(specializations.indexOf(spec) + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
