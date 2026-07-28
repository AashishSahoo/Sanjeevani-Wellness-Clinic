import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import RevealStagger from "@/components/ui/RevealStagger";
import SmartImage from "@/components/ui/SmartImage";
import VitalsLine from "@/components/ui/VitalsLine";
import { doctor } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="About the Doctor"
          title="Medicine practiced with patience, precision, and presence."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="grid grid-cols-3 gap-3">
                <SmartImage
                  src={doctor.portraitAlt}
                  alt={`${doctor.name} in consultation`}
                  className="col-span-2 row-span-2 aspect-[4/5] rounded-card"
                  imgClassName="h-full w-full object-cover rounded-card"
                />
                {doctor.gallery.slice(0, 2).map((g, i) => (
                  <SmartImage
                    key={g}
                    src={g}
                    alt={`Clinic moment ${i + 1}`}
                    className="aspect-square rounded-card"
                    imgClassName="h-full w-full object-cover rounded-card"
                  />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-display text-2xl text-ink">{doctor.name}</h3>
              <p className="mt-1 text-sm font-medium text-copper">{doctor.title}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-5 space-y-4 text-ink/70 leading-relaxed">
                {doctor.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="my-8 text-copper/40">
                <VitalsLine />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-card bg-sage/40 p-6">
                <p className="eyebrow text-pine">Mission &amp; Philosophy</p>
                <p className="mt-3 italic font-display text-lg leading-snug text-ink">
                  &ldquo;{doctor.philosophy}&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Credentials grid */}
        <RevealStagger className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <CredentialCard icon="solar:diploma-verified-bold-duotone" title="Qualifications" items={doctor.qualifications} />
          <CredentialCard icon="solar:medal-ribbons-star-bold-duotone" title="Certifications" items={doctor.certifications} />
          <CredentialCard icon="solar:shield-check-bold-duotone" title="Medical Licenses" items={doctor.licenses} />
          <CredentialCard icon="solar:users-group-rounded-bold-duotone" title="Memberships" items={doctor.memberships} />
        </RevealStagger>

        {/* Awards & specializations */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-card border border-line p-7">
              <div className="flex items-center gap-3">
                <Icon icon="solar:cup-star-bold-duotone" className="text-2xl text-copper" />
                <h4 className="font-display text-xl text-ink">Awards &amp; Achievements</h4>
              </div>
              <ul className="mt-5 space-y-4">
                {doctor.awards.map((a) => (
                  <li key={a.title} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-copper pt-1 w-12 shrink-0">{a.year}</span>
                    <span className="text-sm text-ink/75 leading-relaxed">{a.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="h-full rounded-card bg-pine p-7 text-ivory">
              <div className="flex items-center gap-3">
                <Icon icon="solar:target-bold-duotone" className="text-2xl text-gold" />
                <h4 className="font-display text-xl">Areas of Specialization</h4>
              </div>
              <ul className="mt-5 space-y-3">
                {doctor.specializationsShort.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-sage">
                    <Icon icon="solar:check-circle-bold" className="text-lg text-gold shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CredentialCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-card border border-line p-6 transition-colors hover:border-pine/40">
      <Icon icon={icon} className="text-3xl text-pine" />
      <h4 className="mt-4 font-display text-lg text-ink">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-ink/65 leading-snug">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
