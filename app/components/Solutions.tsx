import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Black Magic Removal", image: "/AstrologyImg/BlackMagicRemoval.jpg", slug: "black-magic-removal" },
  { label: "Chakra Cleansing",              image: "/AstrologyImg/chakra.jpg",                slug: "chakra-cleansing" },
  { label: "Generational Curse & Past Life Karma",  image: "/AstrologyImg/GenerationalCursandPast.jpg",  slug: "generational-curse-past-life-karma" },
  { label: "Identify Blockages & Root Issues", image: "/AstrologyImg/identify-blockages-root-issues.png", slug: "identify-blockages-root-issues" },
  { label: "Get Your Ex Love Back",          image: "/AstrologyImg/GetYourExLoveBack.jpg",       slug: "get-your-ex-love-back" },
  { label: "Evil Spirit Removal", image: "/AstrologyImg/EvilSpiritRemoval.jpg", slug: "evil-spirit-removal" },
  { label: "Palm Reading", image: "/AstrologyImg/PalmReading.jpg", slug: "palm-reading" },
  { label: "Negative Energy Removal", image: "/AstrologyImg/NegativeEnergyRemoval.jpg", slug: "negative-energy-removal" },
  { label: "Psychic Readings", image: "/AstrologyImg/PsychicReadings.jpg", slug: "psychic-readings" },
  { label: "Love Spell Caster", image: "/AstrologyImg/LoveSpell.jpg", slug: "love-spell-caster" },
  { label: "Health Problems", image: "/AstrologyImg/HealthProblems.jpg", slug: "health-problems" },
  { label: "Relationship Problems", image: "/AstrologyImg/RelationshipProblems.jpg", slug: "relationship-problems" },
  { label: "Spiritual Healing", image: "/AstrologyImg/SpiritualHealing.jpg", slug: "spiritual-healing" },
  // { label: "Win Lotto", image: "/AstrologyImg/WinLotto.jpg", slug: "win-lotto" },
  { label: "Job & Business Problems",              image: "/AstrologyImg/JobBusinessProblems.jpg",              slug: "job-business-problems" },
  { label: "Financial Stuck",                       image: "/AstrologyImg/FinancialStuck.jpg",               slug: "financial-stuck" },
];

export default function Solutions() {
  return (
    <section className="w-full px-4 sm:px-10 md:px-14 lg:px-20 py-10 md:py-16 pt-0! bg-background">

      {/* Heading */}
      <h2 className="text-center font-playfair-display text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-14 leading-snug">
        Best Solution Provided By{" "}
        <span className="font-playfair-display-italic text-foreground">
          Astro Sanatana
        </span>
      </h2>

      {/* Services grid */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 max-w-4xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.label}
            href={`/services/${service.slug}`}
            className="flex flex-col items-center gap-3 group cursor-pointer w-full md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
          >
            {/* Circular image */}
            <div className="relative w-56 h-56 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-[6px] border-[#ffb58a] group-hover:border-secondary transition-colors duration-300 flex-shrink-0">
              <Image
                alt={service.label}
                fill
                loading="lazy"
                decoding="async"
                className="object-cover rounded-full"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 160px, 176px"
                src={service.image}
              />
            </div>

            {/* Label */}
            <p className="text-primary font-quicksand font-semibold text-base md:text-base text-center leading-snug group-hover:text-secondary transition-colors duration-300">
              {service.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
