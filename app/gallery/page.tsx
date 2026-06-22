import Image from "next/image";
import Link from "next/link";
import ConnectNow from "../components/ConnectNow";

export const metadata = {
  title: "Gallery | Astro Sanatana",
  description: "Explore the gallery of Astro Sanatana — cherished moments with clients, celebrities, and spiritual events from around the world.",
};

const highlights = [
  { label: "Celebrity Clients", value: "500+" },
  { label: "Countries Visited", value: "30+" },
  { label: "Sacred Events Conducted", value: "10,000+" },
  { label: "Years of Service", value: "50+" },
];

// Full-width promotional banners
const banners = [
  {
    src: "/carouselsImg/1.png",
    alt: "Maha Havan & Yajna for Peace and Prosperity",
    category: "Sacred Ceremonies",
  },
  {
    src: "/carouselsImg/2.png",
    alt: "Traditional Home Puja & Daily Worship",
    category: "Daily Worship",
  },
  {
    src: "/carouselsImg/3.png",
    alt: "Religious Events, Festivals & Spiritual Celebrations",
    category: "Spiritual Celebrations",
  },
  {
    src: "/carouselsImg/4.png",
    alt: "Sacred Vedic Ritual & Spiritual Blessings",
    category: "Vedic Rituals",
  }
];


export default function GalleryPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* ── Hero ── */}
      <div className="bg-background px-4 sm:px-10 md:px-14 lg:px-20 pt-10 md:pt-16 pb-0">
        <div className="flex flex-col md:items-center gap-4 md:text-center">
          <div className="relative inline-block">
            <Image
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={60}
              height={60}
              decoding="async"
              className="hidden md:block absolute -top-6 -right-10 w-12 h-12 opacity-70"
              src="/star-primary.svg"
            />
            <h1 className="text-4xl md:text-5xl font-medium font-playfair-display leading-tight">
              <span className="text-secondary">A glimpse into our </span>
              <span className="text-foreground font-playfair-display-italic">journey</span>
            </h1>
          </div>
          <p className="text-secondary text-base md:text-lg font-medium font-quicksand leading-relaxed max-w-2xl">
            From sacred ceremonies and celebrity consultations to global events and personal milestones —
            these are the moments that define Astro Sanatana&apos;s legacy.
          </p>
        </div>
      </div>

      {/* ── Highlights ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center justify-center gap-2 p-5 md:p-6 bg-[#FFF2EB] rounded-2xl border border-[#ffc09d]/40 text-center"
            >
              <span className="text-2xl md:text-3xl font-bold font-playfair-display text-foreground">{h.value}</span>
              <span className="text-primary font-quicksand font-medium text-sm leading-snug">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pb-8 flex flex-col gap-3">

        <h2 className="text-2xl md:text-3xl font-medium font-playfair-display mb-1">
          <span className="text-foreground font-playfair-display-italic">Sacred </span>
          <span className="text-secondary">Moments &amp; Events</span>
        </h2>
        <p className="text-secondary font-quicksand font-medium text-sm md:text-base mb-4">
          Cherished moments, spiritual events, and sacred ceremonies from across the world.
        </p>

        {/* Row 1: Full-width banner */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden">
          <Image
            src={banners[0].src}
            alt={banners[0].alt}
            width={1920}
            height={800}
            className="w-full h-auto hover:scale-105 transition-transform duration-700"
          />
          {/* <div className="absolute inset-0 bg-linear-to-t from-foreground/65 via-foreground/10 to-transparent" />
          <div className="absolute bottom-4 left-5 md:bottom-6 md:left-7 flex flex-col gap-1">
            <span className="text-[10px] font-quicksand font-bold text-primary bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 rounded-full w-fit">
              {banners[0].category}
            </span>
            <p className="text-white font-playfair-display font-medium text-base md:text-xl leading-snug max-w-md">
              {banners[0].alt}
            </p>
          </div> */}
        </div>

        {/* Row 2: Two equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[banners[1], banners[2]].map((item) => (
            <div key={item.src} className="relative rounded-2xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={1920}
                height={800}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
              {/* <div className="absolute inset-0 bg-linear-to-t from-foreground/65 via-foreground/10 to-transparent" />
              <div className="absolute bottom-3 left-4 flex flex-col gap-1">
                <span className="text-[10px] font-quicksand font-bold text-primary bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 rounded-full w-fit">
                  {item.category}
                </span>
                <p className="text-white font-quicksand font-semibold text-sm leading-snug max-w-xs">{item.alt}</p>
              </div> */}
            </div>
          ))}
        </div>


        {/* Row 4: Full-width banner */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden">
          <Image
            src={banners[3].src}
            alt={banners[3].alt}
            width={1920}
            height={800}
            className="w-full h-auto hover:scale-105 transition-transform duration-700"
          />
          {/* <div className="absolute inset-0 bg-linear-to-t from-foreground/65 via-foreground/10 to-transparent" />
          <div className="absolute bottom-4 left-5 md:bottom-6 md:left-7 flex flex-col gap-1">
            <span className="text-[10px] font-quicksand font-bold text-primary bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 rounded-full w-fit">
              {banners[3].category}
            </span>
            <p className="text-white font-playfair-display font-medium text-base md:text-xl leading-snug max-w-md">
              {banners[3].alt}
            </p>
          </div> */}
        </div>


      </div>

      {/* ── CTA ── */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pt-6 pb-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-8 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40">
          <div>
            <h3 className="text-foreground text-xl font-semibold font-playfair-display">Want to be part of our story?</h3>
            <p className="text-primary font-quicksand font-medium text-sm mt-1">
              Book a consultation and let Astro Sanatana guide your journey.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="https://wa.me/14169314409"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-secondary/80 transition-colors text-sm"
            >
              Book Now
            </Link>
            <Link
              href="/location"
              className="inline-flex items-center gap-2 border border-secondary text-secondary font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-secondary hover:text-white transition-colors text-sm"
            >
              Location
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
