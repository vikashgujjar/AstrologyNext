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

const celebrityImages = [
  { src: "/carouselsImg/Gallery1.webp", alt: "Client: Mumbai Indians", span: "col-span-1 row-span-2" },
  { src: "/carouselsImg/Gallery2.webp", alt: "Astro Sanatana with Sonu Nigam", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1528319725582-ddc096101511?w=800&q=80", alt: "Astro Sanatana at Ambani Wedding", span: "col-span-1 row-span-1" },
  { src: "/carouselsImg/Gallery3.webp", alt: "Astro Sanatana Astrologers with MS Dhoni", span: "col-span-2 row-span-1" },
];

const teamImages = [
  { src: "/carouselsImg/Gallery4.webp", alt: "Spiritual Consultation", span: "col-span-2 row-span-1" },
  { src: "/carouselsImg/Gallery5.webp", alt: "Sacred Wedding Ceremony", span: "col-span-1 row-span-2" },
  { src: "/carouselsImg/Gallery6.webp", alt: "Astro Sanatana Team", span: "col-span-1 row-span-1" },
  { src: "/carouselsImg/Gallery2.webp", alt: "Client Consultation", span: "col-span-1 row-span-1" },
];

export default function GalleryPage() {
  return (
    <main className="flex flex-col flex-1">

      {/* Hero */}
      <div className="bg-background p-4 sm:p-10 md:p-14 lg:p-20 pb-0! overflow-hidden">
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
          <p className="text-secondary text-lg md:text-xl font-medium font-quicksand leading-relaxed max-w-2xl">
            From sacred ceremonies and celebrity consultations to global events and personal milestones —
            these are the moments that define Astro Sanatana&apos;s legacy.
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center justify-center gap-2 p-6 bg-[#FFF2EB] rounded-2xl md:rounded-3xl border border-[#ffc09d]/40 text-center"
            >
              <span className="text-2xl md:text-3xl font-bold font-playfair-display text-foreground">{h.value}</span>
              <span className="text-primary font-quicksand font-medium text-sm leading-snug">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Celebrity & Event Gallery */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pb-3">
        <h2 className="text-2xl md:text-3xl font-medium font-playfair-display mb-1">
          <span className="text-foreground font-playfair-display-italic">Celebrity</span>
          <span className="text-secondary"> &amp; Event Moments</span>
        </h2>
        <p className="text-secondary font-quicksand font-medium text-sm md:text-base mb-6">
          Cherished moments with world-renowned personalities and iconic events.
        </p>
        {/* Mobile: simple 2-col equal grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {celebrityImages.map((img) => (
            <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="50vw" />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/50 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-2 right-2 text-white font-quicksand font-semibold text-xs leading-snug">{img.alt}</p>
            </div>
          ))}
        </div>
        {/* Desktop: masonry grid */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-3 md:h-120">
          {celebrityImages.map((img) => (
            <div key={img.src} className={`${img.span} relative overflow-hidden rounded-2xl`}>
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white font-quicksand font-semibold text-xs leading-snug">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Gallery */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pt-10 pb-3">
        <h2 className="text-2xl md:text-3xl font-medium font-playfair-display mb-1">
          Our <span className="text-foreground font-playfair-display-italic">Team</span>
          <span className="text-secondary"> in Action</span>
        </h2>
        <p className="text-secondary font-quicksand font-medium text-sm md:text-base mb-6">
          Behind every consultation is a dedicated team committed to your spiritual well-being.
        </p>
        {/* Mobile: simple 2-col equal grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {teamImages.map((img) => (
            <div key={img.src + img.alt} className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="50vw" />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/50 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-2 right-2 text-white font-quicksand font-semibold text-xs leading-snug">{img.alt}</p>
            </div>
          ))}
        </div>
        {/* Desktop: masonry grid */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-3 md:h-120">
          {teamImages.map((img) => (
            <div key={img.src + img.alt} className={`${img.span} relative overflow-hidden rounded-2xl`}>
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white font-quicksand font-semibold text-xs leading-snug">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 sm:px-10 md:px-14 lg:px-20 pt-10 pb-4">
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
              href="/contact"
              className="inline-flex items-center gap-2 border border-secondary text-secondary font-quicksand font-semibold rounded-full px-6 py-3 hover:bg-secondary hover:text-white transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
