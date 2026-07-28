"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@iconify/react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { site, socialLinks } from "@/data/site";

const contactCards = [
  {
    icon: "solar:phone-calling-bold-duotone",
    label: "Mobile",
    value: site.phone,
    href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: "solar:phone-bold-duotone",
    label: "Telephone",
    value: site.telephone,
    href: `tel:${site.telephone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: "solar:letter-bold-duotone",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "ic:baseline-whatsapp",
    label: "WhatsApp",
    value: "Chat with us",
    href: site.whatsapp,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact Us"
          title="Have a question, or ready to book? We're one message away."
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contactCards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === "WhatsApp" ? "_blank" : undefined}
              rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="focus-ring group rounded-card border border-line p-5 text-center transition-all hover:border-pine/40 hover:shadow-soft"
            >
              <Icon icon={c.icon} className="mx-auto text-2xl text-copper" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink/50">{c.label}</p>
              <p className="mt-1 text-sm font-medium text-ink break-words">{c.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" placeholder="Jane Doe" />
                <Field label="Phone Number" name="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <Field label="Email Address" name="email" type="email" placeholder="jane@email.com" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="focus-ring mt-2 w-full rounded-card border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-pine"
                />
              </div>
              <button
                type="submit"
                className="focus-ring inline-flex items-center gap-2 rounded-card bg-copper px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-copper-dark"
              >
                {status === "sent" ? "Message Sent" : "Send Message"}
                <Icon icon={status === "sent" ? "solar:check-circle-bold" : "solar:arrow-right-bold"} />
              </button>
              {status === "sent" && (
                <p className="text-sm text-pine">
                  Thank you — our team will get back to you within one business day.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="h-full rounded-card bg-sage/40 p-8">
              <h4 className="font-display text-lg text-ink">Prefer to call?</h4>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                Our front desk is available during clinic hours to help you find the
                soonest appointment.
              </p>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="focus-ring mt-5 inline-flex items-center gap-2 text-lg font-display text-pine"
              >
                <Icon icon="solar:phone-calling-bold-duotone" />
                {site.phone}
              </a>

              <div className="mt-8 pt-8 border-t border-pine/15">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  Follow Along
                </p>
                <div className="mt-3 flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white text-pine transition-colors hover:bg-pine hover:text-ivory"
                    >
                      <Icon icon={s.icon} className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wide text-ink/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="focus-ring mt-2 w-full rounded-card border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-pine"
      />
    </div>
  );
}
