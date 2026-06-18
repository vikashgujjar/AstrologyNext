"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// 3 rows × 6 cols on desktop
const INITIAL_VISIBLE = 18;

const locations = [
  { name: "New York",          image: "/locationsImg/NewYork.webp" },
  { name: "Florida",           image: "/locationsImg/Florida.webp" },
  { name: "Georgia",           image: "/locationsImg/Georgia.webp" },
  { name: "Connecticut",       image: "/locationsImg/Connecticut.webp" },
  { name: "New Jersey",        image: "/locationsImg/NewJersey.webp" },
  { name: "Boston",            image: "/locationsImg/Boston.webp" },
  { name: "Philadelphia",      image: "/locationsImg/Philadelphia.webp" },
  { name: "Texas",             image: "/locationsImg/Texas.webp" },
  { name: "Miami",             image: "/locationsImg/Miami.webp" },
  { name: "California",        image: "/locationsImg/California.webp" },
  { name: "Jacksonville",      image: "/locationsImg/Jacksonville.webp" },
  { name: "Baltimore",         image: "/locationsImg/Baltimore.webp" },
  { name: "Chicago",           image: "/locationsImg/Chicago.webp" },
  { name: "Seattle",           image: "/locationsImg/Seattle.webp" },
  { name: "Virginia",          image: "/locationsImg/Virginia.webp" },
  { name: "Atlanta",           image: "/locationsImg/Atlanta.webp" },
  { name: "San Diego",         image: "/locationsImg/SanDiego.webp" },
  { name: "Los Angeles",       image: "/locationsImg/LosAngeles.webp" },
  { name: "Fresno, CA",        image: "/locationsImg/Fresno.webp" },
  { name: "Sacramento, CA",    image: "/locationsImg/Sacramento.webp" },
  { name: "San Jose, CA",      image: "/locationsImg/SanJose.webp" },
  { name: "Long Beach, CA",    image: "/locationsImg/LongBeach.webp" },
  { name: "San Francisco, CA", image: "/locationsImg/SanFrancisco.webp" },
  { name: "Oakland, CA",       image: "/locationsImg/Oakland.webp" },
  { name: "Irvine, CA",        image: "/locationsImg/Irvine.webp" },
  { name: "Bakersfield, CA",   image: "/locationsImg/Bakersfield.webp" },
  { name: "Santa Ana, CA",     image: "/locationsImg/SantaAna.webp" },
  { name: "Anaheim, CA",       image: "/locationsImg/Anaheim.webp" },
  { name: "Chula Vista, CA",   image: "/locationsImg/ChulaVista.webp" },
  { name: "Stockton, CA",      image: "/locationsImg/Stockton.webp" },
  { name: "Fremont, CA",       image: "/locationsImg/Fremont.webp" },
  { name: "Riverside, CA",     image: "/locationsImg/Riverside.webp" },
  { name: "Santa Clarita, CA", image: "/locationsImg/SantaClarita.webp" },
];

function LocationCard({ location }: { location: { name: string; image: string } }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href="/connect-with-astrologer"
      className="flex flex-col items-center gap-0 group cursor-pointer"
    >
      <div className="flex flex-col items-center">
        <div className="w-35 h-35 rounded-full border-[6px] sm:border-[7px] border-primary overflow-hidden relative shrink-0 group-hover:border-secondary transition-colors duration-300">
          {imgError ? (
            <div className="w-full h-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xl">
                {location.name.charAt(0)}
              </span>
            </div>
          ) : (
            <Image
              alt={location.name}
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
              sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 140px"
              src={location.image}
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <div
          className="w-0 h-0 -mt-px transition-colors duration-300"
          style={{
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "18px solid hsl(var(--primary))",
          }}
        />
      </div>
      <p className="font-quicksand font-bold text-primary uppercase text-[10px] sm:text-xs md:text-sm mt-3 text-center tracking-wide leading-tight group-hover:text-secondary transition-colors duration-300">
        {location.name}
      </p>
    </Link>
  );
}

export default function Locations() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? locations : locations.slice(0, INITIAL_VISIBLE);

  return (
    <section className="w-full px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16 bg-background">

      <h2 className="text-center font-playfair-display text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14 leading-snug">
        To bring back{" "}
        <span className="font-playfair-display-italic text-foreground">
          positivity in life
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-10 max-w-5xl mx-auto">
        {visible.map((location) => (
          <LocationCard key={location.name} location={location} />
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="font-quicksand font-semibold text-sm sm:text-base px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            View More Locations
          </button>
        </div>
      )}
    </section>
  );
}
