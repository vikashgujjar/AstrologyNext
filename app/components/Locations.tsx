import Image from "next/image";
import Link from "next/link";

const locations = [
  { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80" },
  { name: "Florida", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
  { name: "Georgia", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80" },
  { name: "Connecticut", image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=400&q=80" },
  { name: "New Jersey", image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80" },
  { name: "Boston", image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80" },
  { name: "Philadelphia", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80" },
  { name: "Texas", image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=400&q=80" },
  { name: "Miami", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
  { name: "California", image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400&q=80" },
  { name: "Jacksonville", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80" },
  { name: "Baltimore", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80" },
];

export default function Locations() {
  return (
    <section className="w-full px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16 bg-background">

      {/* Heading */}
      <h2 className="text-center font-playfair-display text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14 leading-snug">
        To bring back{" "}
        <span className="font-playfair-display-italic text-foreground">
          positivity in life
        </span>
      </h2>

      {/* Locations grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-10 max-w-5xl mx-auto">
        {locations.map((location) => (
          <Link
            key={location.name}
            href="/connect-with-astrologer"
            className="flex flex-col items-center gap-0 group cursor-pointer"
          >
            {/* Pin shape: circle + downward triangle */}
            <div className="flex flex-col items-center">
              {/* Circular image with thick primary border */}
              <div className="w-25 h-25 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-[6px] sm:border-[7px] border-primary overflow-hidden relative flex-shrink-0 group-hover:border-secondary transition-colors duration-300">
                <Image
                  alt={location.name}
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                  src={location.image}
                />
              </div>
              {/* Pin point triangle */}
              <div
                className="w-0 h-0 -mt-px group-hover:[border-top-color:hsl(var(--secondary))] transition-colors duration-300"
                style={{
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "18px solid hsl(var(--primary))",
                }}
              />
            </div>

            {/* Location name */}
            <p className="font-quicksand font-bold text-primary uppercase text-[10px] sm:text-xs md:text-sm mt-3 text-center tracking-wide leading-tight group-hover:text-secondary transition-colors duration-300">
              {location.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
