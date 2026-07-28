# Ashford Wellness Clinic — Website

A premium, fully responsive doctor/medical clinic website built with
Next.js (App Router), TypeScript, Tailwind CSS, Iconify, and GSAP.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — custom design tokens (colors, type scale, radius, shadows)
- **Iconify (`@iconify/react`)** — all icons, using the Solar icon set
- **GSAP** (`gsap` + `ScrollTrigger`) — entrance timeline, scroll-triggered
  reveals, animated counters, page loader

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

> **Note:** the build step downloads and self-hosts the Google Fonts (Fraunces,
> Inter, IBM Plex Mono) via `next/font/google`, so an internet connection is
> required the first time you run `npm run build` or `npm run dev`.

## Adding Your Own Images

All images live under `public/assets/` and are referenced by path in
`src/data/site.ts`. Until a real file exists at a given path, that spot
renders an elegant placeholder automatically — nothing breaks.

To add real photos, just drop files into the matching folder with the exact
filename already used in the code (see `public/assets/README.md` for the
full list), for example:

```
public/assets/doctor/portrait-main.jpg
public/assets/gallery/exterior.jpg
public/assets/testimonials/patient-1.jpg
```

Want different filenames or more gallery items? Edit the paths in
`src/data/site.ts` — every image reference in the site flows through that
one file.

## Editing Content

Nearly all text content (doctor bio, services, facilities, testimonials,
working hours, contact details, map embed URL, etc.) lives in a single file:

```
src/data/site.ts
```

Update it there and the whole site updates — no need to touch components.

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata
    page.tsx           # Assembles all sections
    globals.css         # Global styles + signature "vitals line" motif
  components/
    sections/           # One component per website section
      Navbar.tsx
      Hero.tsx
      About.tsx
      Specializations.tsx
      Facilities.tsx
      Services.tsx
      Gallery.tsx
      Testimonials.tsx
      WorkingHours.tsx
      Location.tsx
      Contact.tsx
      CtaBanner.tsx
      Footer.tsx
    ui/                  # Reusable building blocks
      Button.tsx
      SectionHeading.tsx
      SmartImage.tsx       # Image with graceful placeholder fallback
      Reveal.tsx            # GSAP scroll-reveal wrapper
      RevealStagger.tsx     # GSAP staggered grid reveal
      Counter.tsx            # Animated stat counter
      VitalsLine.tsx          # Signature EKG-style section divider
      Loader.tsx               # Page-load animation
  data/
    site.ts               # All editable content lives here
public/
  assets/                  # Drop real images here (see assets/README.md)
```

## Design Notes

- **Palette:** deep pine green (`#1F4D42`), warm ivory (`#FBF8F3`), soft sage
  (`#DCE6DE`), and a copper accent (`#B8703F`) — a healthcare palette that
  avoids the generic clinical-blue look.
- **Type:** Fraunces (display/serif) paired with Inter (body) and IBM Plex
  Mono (eyebrows/labels/stats).
- **Signature motif:** a subtle EKG/vitals line (`VitalsLine.tsx`) used as a
  recurring section divider, echoing the monitored-care subject matter.
- Respects `prefers-reduced-motion`.

## Sections Included

Home (hero + stats), About the Doctor, Specializations, Clinic Facilities,
Services, Clinic Gallery (filterable + lightbox), Patient Testimonials
(auto-playing carousel), Working Hours, Location (map embed), Contact (form +
WhatsApp/phone/email), and repeated "Book Appointment" CTA banners throughout.

## Customizing the Map

Replace `mapEmbedUrl` in `src/data/site.ts` with your clinic's real Google
Maps embed URL (Google Maps → Share → Embed a map → copy the `src` from the
`<iframe>`).
