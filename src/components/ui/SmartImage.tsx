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
//
// `className` controls the SIZE/SHAPE of the box (width, height, rounding,
// aspect ratio, shrink behavior) and always goes on the outer wrapper.
// `imgClassName` controls how the image fills that box (object-fit, etc.)
// and only ever goes on the inner <img>. Keeping these on separate elements
// avoids conflicting utilities (e.g. a fixed h-9 fighting an h-full) that
// render inconsistently across breakpoints.
export default function SmartImage({ src, alt, className = "", imgClassName = "" }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-sage to-pine-50 text-pine ${className}`}
        role="img"
        aria-label={alt}
      >
        <Icon icon="solar:gallery-wide-bold-duotone" className="text-3xl opacity-60" />
        <span className="eyebrow text-pine/60 px-4 text-center">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`block h-full w-full ${imgClassName}`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}