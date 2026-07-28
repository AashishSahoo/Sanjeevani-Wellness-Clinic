import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealStagger from "@/components/ui/RevealStagger";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services &amp; Treatments"
          title="Comprehensive care, from routine checkups to specialized treatment."
        />

        <RevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-card border border-line p-6 transition-all duration-300 hover:shadow-soft hover:border-copper/40"
            >
              <Icon icon={s.icon} className="text-3xl text-copper" />
              <h3 className="mt-5 font-display text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 flex-1">{s.description}</p>
              <a
                href="#contact"
                className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-pine hover:text-copper transition-colors"
              >
                Learn More
                <Icon icon="solar:arrow-right-linear" className="text-base" />
              </a>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
