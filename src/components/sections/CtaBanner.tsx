import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

type CtaBannerProps = {
  title: string;
  description: string;
  variant?: "copper" | "ink";
};

export default function CtaBanner({
  title,
  description,
  variant = "copper",
}: CtaBannerProps) {
  const bg = variant === "copper" ? "bg-copper" : "bg-ink";

  return (
    <section className={`${bg} py-14 lg:py-16`}>
      <Reveal>
        <div className="container-x flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ivory/15 text-ivory">
              <Icon icon="solar:calendar-add-bold" className="text-2xl" />
            </span>
            <div>
              <h3 className="font-display text-2xl text-ivory">{title}</h3>
              <p className="mt-1 text-sm text-ivory/75 max-w-md">{description}</p>
            </div>
          </div>
          <Button href="#contact" variant="light" icon="solar:arrow-right-bold">
            Book Appointment
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
