"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

// Renders the image at `src` (drop your real file into /public/assets/... with
// the same filename and it will appear automatically). Until then, shows a
// tasteful placeholder so the layout always looks finished.
export default function SmartImage({ src, alt, className = "", imgClassName = "" }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sage to-pine-50 text-pine ${className}`}
        role="img"
        aria-label={alt}
      >
        <Icon icon="solar:gallery-wide-bold-duotone" className="text-3xl opacity-60" />
        <span className="eyebrow text-pine/60 px-4 text-center">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${imgClassName}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
