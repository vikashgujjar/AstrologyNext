import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Black Magic Removal", image: "/AstrologyImg/BlackMagicRemoval.jpg" },
  { label: "Get Your Ex Love Back", image: "/AstrologyImg/GetYourExLoveBack.jpg" },
  { label: "Evil Spirit Removal", image: "/AstrologyImg/EvilSpiritRemoval.jpg" },
  { label: "Palm Reading", image: "/AstrologyImg/PalmReading.jpg" },
  { label: "Negative Energy Removal", image: "/AstrologyImg/NegativeEnergyRemoval.jpg" },
  { label: "Psychic Readings", image: "/AstrologyImg/PsychicReadings.jpg" },
  { label: "Love Spell Caster", image: "/AstrologyImg/LoveSpell.jpg" },
  { label: "Health Problems", image: "/AstrologyImg/HealthProblems.jpg" },
  { label: "Relationship Problems", image: "/AstrologyImg/RelationshipProblems.jpg" },
  { label: "Spiritual Healing", image: "/AstrologyImg/SpiritualHealing.jpg" },
  { label: "Win Lotto", image: "/AstrologyImg/WinLotto.jpg" },
  { label: "Job & Business Problems", image: "/AstrologyImg/JobBusinessProblems.jpg" },
];

export default function Solutions() {
  return (
    <section className="w-full px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16 pt-0! bg-background">

      {/* Heading */}
      <h2 className="text-center font-playfair-display text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14 leading-snug">
        Best Solution Provided By{" "}
        <span className="font-playfair-display-italic text-foreground">
          Pandit C.K Sharma
        </span>
      </h2>

      {/* Services grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10 max-w-4xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.label}
            href="/connect-with-astrologer"
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            {/* Circular image */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-[6px] border-[#ffb58a] group-hover:border-secondary transition-colors duration-300 flex-shrink-0">
              <Image
                alt={service.label}
                fill
                loading="lazy"
                decoding="async"
                className="object-cover rounded-full"
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                src={service.image}
              />
            </div>

            {/* Label */}
            <p className="text-primary font-quicksand font-semibold text-sm md:text-base text-center leading-snug group-hover:text-secondary transition-colors duration-300">
              {service.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
