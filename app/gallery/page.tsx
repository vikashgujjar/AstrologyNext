import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Gallery | Astro Sanatana",
  description: "Explore the gallery of Astro Sanatana — cherished moments with clients, celebrities, and spiritual events from around the world.",
};

const highlights = [
  { label: "Celebrity Clients", value: "500+" },
  { label: "Countries Visited", value: "30+" },
  { label: "Sacred Events", value: "10,000+" },
  { label: "Years of Service", value: "50+" },
];

const images = [
  // { src: "/carouselsImg/1.png", alt: "Maha Havan & Yajna for Peace and Prosperity",        tag: "Sacred Ceremonies"        },
  { src: "/Galleryimages/1.jpeg", alt: "Maha Havan & Yajna for Peace and Prosperity",        tag: "Sacred Ceremonies"        },
  { src: "/Galleryimages/2.jpeg", alt: "Traditional Home Puja & Daily Worship",              tag: "Daily Worship"             },
  { src: "/Galleryimages/3.jpeg", alt: "Religious Events & Spiritual Celebrations",          tag: "Spiritual Celebrations"    },
  { src: "/Galleryimages/4.jpeg", alt: "Sacred Vedic Ritual & Spiritual Blessings",          tag: "Vedic Rituals"             },
  { src: "/Galleryimages/5.jpeg", alt: "Chakra Healing & Energy Alignment",                  tag: "Healing Arts"              },
  { src: "/Galleryimages/6.jpeg", alt: "Celebrity Consultations & Spiritual Guidance",       tag: "Celebrity Moments"         },
  { src: "/Galleryimages/7.jpeg", alt: "Global Outreach & Community Blessings",              tag: "Global Events"             },
];

function GalleryImg({ src, alt, tag, className }: { src: string; alt: string; tag: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl group ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, 50vw"
      />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Hero ── */}
      <div className="bg-background px-4 sm:px-10 md:px-14 lg:px-20 pt-10 md:pt-16 pb-6 md:pb-10">
        <div className="flex flex-col md:items-center gap-4 md:text-center max-w-3xl md:mx-auto">
          <p className="font-quicksand font-semibold text-xs uppercase tracking-widest text-secondary/60">Our Gallery</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-playfair-display leading-tight">
            <span className="text-secondary">A glimpse into our </span>
            <span className="text-foreground font-playfair-display-italic">sacred journey</span>
          </h1>
          <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed">
            From sacred ceremonies and celebrity consultations to global events and personal milestones —
            these are the moments that define Astro Sanatana&apos;s legacy.
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pb-10 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-4xl md:mx-auto">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col items-center justify-center gap-1.5 p-4 md:p-6 bg-[#FFF2EB] rounded-2xl border border-[#ffc09d]/40 text-center">
              <span className="text-2xl md:text-3xl font-bold font-playfair-display text-foreground">{h.value}</span>
              <span className="text-primary font-quicksand font-medium text-xs md:text-sm leading-snug">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Gallery ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pb-12 flex flex-col gap-3">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-medium font-playfair-display leading-snug">
            <span className="text-foreground font-playfair-display-italic">Sacred </span>
            <span className="text-secondary">Moments &amp; Events</span>
          </h2>
          <p className="text-secondary font-quicksand font-medium text-sm mt-1">
            Cherished moments, spiritual events, and sacred ceremonies from across the world.
          </p>
        </div>

        {/* Row 1 — Full-width hero banner */}
        <GalleryImg {...images[0]} className="w-full h-72 sm:h-96 md:h-112 lg:h-128" />
        {/* Row 2 — Three equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <GalleryImg {...images[1]} className="h-56 sm:h-64 md:h-72" />
          <GalleryImg {...images[2]} className="h-56 sm:h-64 md:h-72" />
          <GalleryImg {...images[3]} className="h-56 sm:h-64 md:h-72" />
        </div>

        {/* Row 3 — 2/3 + 1/3 split */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <GalleryImg {...images[4]} className="sm:col-span-2 h-64 sm:h-80 md:h-96" />
          <GalleryImg {...images[5]} className="h-64 sm:h-80 md:h-96" />
        </div>

        {/* Row 4 — Full-width closing banner */}
        <GalleryImg {...images[6]} className="w-full h-72 sm:h-96 md:h-112 lg:h-128" />

      </div>

      {/* ── CTA ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pb-12">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Gradient bg */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg,#c0471e 0%,#e8824a 50%,#ffb58a 100%)" }} />
          <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />
          {/* Decorative circles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <circle cx="5%"  cy="50%" r="80"  fill="white" opacity="0.06" />
            <circle cx="92%" cy="50%" r="100" fill="white" opacity="0.05" />
            <circle cx="50%" cy="50%" r="150" fill="white" opacity="0.03" />
          </svg>
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 md:px-12 py-8 md:py-10">
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h3 className="text-white font-playfair-display font-semibold text-xl md:text-2xl leading-snug">
                Want to be part of our story?
              </h3>
              <p className="text-white/80 font-quicksand font-medium text-sm">
                Book a consultation and let Astro Sanatana guide your journey.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="https://wa.me/13413455238"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-secondary font-quicksand font-bold rounded-full px-6 py-3 hover:bg-white/90 transition-colors text-sm shadow-sm"
              >
                Book Now
              </Link>
              <Link
                href="/connect-with-astro-sanatana"
                className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-white/10 transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
