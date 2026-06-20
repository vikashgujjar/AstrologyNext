import Link from "next/link";

const defaultServices = (city: string) => [
  `Love Back Expert in ${city}`,
  `Astrologer in ${city}`,
  `Black Magic Removal in ${city}`,
  `Psychic in ${city}`,
];

const cityData: { city: string; services?: string[] }[] = [
  { city: "Los Angeles" },
  { city: "Florida" },
  { city: "Chicago" },
  { city: "Texas" },
  {
    city: "Seattle",
    services: [
      "Astrologer in Seattle",
      "Love Problem Solution in Seattle",
      "Negative Energy Removal in Seattle",
      "Evil Spirit Removal in Seattle",
      "Black Magic Removal in Seattle",
      "Spiritual Healer in Seattle",
      "Psychic Reader in Seattle",
    ],
  },
  { city: "New Jersey", services: ["Best Astrologer in New Jersey", "Love Back Expert in New Jersey", "Black Magic Removal in New Jersey", "Psychic in New Jersey"] },
  { city: "Virginia", services: ["Love Back Expert in Virginia", "Psychic Reader in Virginia", "Black Magic Removal in Virginia", "Best Astrologer in Virginia"] },
  { city: "New York", services: ["Love Back Expert in New York", "Astrologer in New York", "Black Magic Removal in New York", "Psychic Reader in New York"] },
  { city: "Atlanta" },
  { city: "San Diego" },
  { city: "California", services: ["Love Back Expert in California", "Black Magic Removal in California", "Psychic in California"] },
];

export default function CityServices() {
  return (
    <section className="w-full px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16 bg-[#FFF2EB] mt-12 md:mt-12">

      {/* Heading */}
      <h2 className="text-center font-playfair-display text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-14 leading-snug">
        Astrologer Services{" "}
        <span className="font-playfair-display-italic text-foreground">
          Across the USA
        </span>
      </h2>

      {/* City cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cityData.map(({ city, services }) => {
          const items = services ?? defaultServices(city);
          return (
            <div
              key={city}
              className="flex flex-col rounded-2xl overflow-hidden border border-[#ffc09d]/50 shadow-sm"
            >
              {/* Card header */}
              <div className="bg-foreground px-5 py-4">
                <h3 className="text-white font-playfair-display font-semibold text-base text-center leading-snug">
                  Astrologer Services in {city}
                  <br />
                  <span className="text-[#ffc09d] font-quicksand font-medium text-sm">(Astro Sanatana)</span>
                </h3>
              </div>

              {/* Service items */}
              <div className="bg-white max-h-[240px] overflow-y-auto p-4 flex flex-col gap-2.5 flex-1">
                {items.map((item) => (
                  <Link
                    key={item}
                    href="/connect-with-astrologer"
                    className="block text-center text-primary font-quicksand font-semibold text-sm px-4 py-2.5 rounded-full border border-[#ffc09d]/60 bg-[#FFF2EB] hover:bg-secondary hover:text-white hover:border-secondary transition-colors duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
