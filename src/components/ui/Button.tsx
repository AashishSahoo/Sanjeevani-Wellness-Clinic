import Link from "next/link";
import { Icon } from "@iconify/react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  icon?: string;
  className?: string;
};

const variants = {
  primary:
    "bg-copper text-ivory hover:bg-copper-dark shadow-soft",
  secondary:
    "bg-pine text-ivory hover:bg-pine-dark",
  ghost:
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-ivory",
  light:
    "bg-ivory text-pine hover:bg-sage",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-card px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      {icon ? (
        <Icon
          icon={icon}
          className="text-lg transition-transform duration-300 group-hover:translate-x-0.5"
        />
      ) : null}
    </Link>
  );
}
