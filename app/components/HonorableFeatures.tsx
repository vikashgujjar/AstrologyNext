import Image from "next/image";

const companies = [
  { src: "/image.png", alt: "DNA" },
  { src: "/AajTak.png", alt: "Aaj Tak" },
  { src: "/Netflix.png", alt: "Netfilx" },
  { src: "/colors.png", alt: "Hotstar" },
  { src: "/mensxp.png", alt: "Men XP" },
  { src: "/wsj.png", alt: "Wall Street Journal" },
];

export default function HonorableFeatures() {
  return (
    <div className="flex px-3 mt-12 md:px-12 pb-4 md:pb-20 flex-col gap-6 items-center justify-between w-full max-w-5xl mx-auto">
      <div className="flex flex-row items-center justify-center gap-2.5">
        <Image
          alt="Star"
          loading="lazy"
          width={24}
          height={24}
          decoding="async"
          className=""
          style={{ color: "transparent" }}
          src="/star-primary.svg"
        />
        <h3 className="text-xl font-bold leading-relaxed font-quicksand text-primary">
          Honorable Features
        </h3>
        <Image
          alt="Star"
          loading="lazy"
          width={24}
          height={24}
          decoding="async"
          className=""
          style={{ color: "transparent" }}
          src="/star-primary.svg"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {companies.map((company) => (
          <div
            key={company.alt}
            className="bg-white rounded-lg px-3 py-1 md:py-2 cursor-pointer"
          >
            <Image
              alt={company.alt}
              loading="lazy"
              width={200}
              height={200}
              decoding="async"
              className="object-contain h-12 w-32 md:h-16 mix-blend-multiply"
              style={{ color: "transparent" }}
              src={company.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
